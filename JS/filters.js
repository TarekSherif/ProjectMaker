myApp.filter('filterByKey', function() {
        return function(items, field) {
            var result = {};
            
            angular.forEach(items, function (value, key) {
                var reg = new RegExp(field, 'gi');
                if (String(key).match(reg)) {
                        result[key] = value;
                }
            });
            return result;
        };
    }) 
    .filter('camelize', function() {
        return function(word) {
            var result = "";
            var fristLoop=1;
            angular.forEach(word, function (ch) {
                
                if (fristLoop==1) {
                    result=ch.toLowerCase() ;
                }else{
                    result=result+ch;
                }
                fristLoop=0;
            });
            return result;
        };
    }) .filter('jsonWithOutDescription', function() {
        return function(tableObject) {
            delete tableObject.Description
            var tableObjectWithOuthashKey=JSON.parse(angular.toJson(tableObject));
            return  JSON.stringify(tableObjectWithOuthashKey, null, "\t");
        };
    }).filter('dataType', function() {
        return function(word) {
            var result = '';
            switch (word) {
                case 'int':
                    result = 'int';
                    break;
                case 'decimal(18,10)':
                        result = 'decimal';
                        break;
                        
                case 'date':
                case 'datetime':
                case 'smalldatetime':
                        result = 'DateTime';
                        break;
                case 'bit':
                        result = 'bool';
                        break;                                        
                default:
                    result = 'string';
            }
            
            return result;
        };
    })
//     var Access = [
//         { "DB_Type": "Number", "VB_Type": "Int64" },
//         { "DB_Type": "Number", "VB_Type": "Int32" },
//         { "DB_Type": "Number", "VB_Type": "Int16" },
//         { "DB_Type": "Text", "VB_Type": "String" },
//         { "DB_Type": "DateTime", "VB_Type": "DateTime" },
//         { "DB_Type": "Yes/No", "VB_Type": "Boolean" },
//         { "DB_Type": "Byte", "VB_Type": "Byte" }
// ];

    