/// <reference path="../angular.min.js" />
var myApp = angular
                                .module("ProjectMakerModule", ['angular-nicescroll'])
                    .controller("ProjectMakerController", function ($scope) {
                        
                        $scope.TableSetting = {
                                ColumnName: true,
                                Description: true,
                                ISPrimaryKey: true,
                                Type: true,
                                Size: true,
                                NotNull: true,
                                Unique: true,
                                DefaultValue: true,
                                ISForeignKey: true,
                                TableSearchMenu: true,
                
                    };
                        
                        $scope.SelectTable = {};
                        // $scope.Tables = Tables;
                        $scope.Tables = [];
                        $scope.NOFRow = 5;
                        
                        $scope.EnableOrRDisableSetting = function (Setting) {
                            $scope.TableSetting[Setting] = !$scope.TableSetting[Setting];
                        };
                        $scope.showEditTableMode=false
                        $scope.RenameTable = function () {
                            
                            $scope.showEditTableMode = true;
                            
                                };
                        $scope.EndRenameTable = function () {

                            $scope.showEditTableMode = false;

                        };
                        $scope.GetCssEditTableMode = function () {
                            return ($scope.showEditTableMode) ? "" : "readonly";
                                

                        };
                

                        $scope.FilterMode = false;
                        $scope.FilterTable = {};
                        $pages=[
                            'showAddTableMode',
                            'showEditTableMode' ,
                            'showDBScript',
                            'showGlobalLayer',
                            'showDataAccess',
                            'showBusinessLogic',
                            'showPresentation',
                            'showJsonObject'

                              ];

                        $scope.showAddTableMode = true;
                        $scope.showEditTableMode = false;
                        $scope.showDBScript=false;
                        $scope.showGlobalLayer=false;
                        $scope.showDataAccess=false;
                        $scope.showBusinessLogic=false;
                        $scope.showPresentation=false;
                        $scope.showJsonObject=false;

                  
                        $scope.showPage=function (page) {
                            $scope.closeAll();
                            $scope[page]=true;
                        }
                       
                        

                        $scope.CancelFilter = function () {
                            $scope.FilterTable = {};
                        };


                        $scope.NewTable = {};

                        
                    
                        

                    
                        $scope.CancelInsert = function () {
                            $scope.NewTable = {};
                            $scope.showAddTableMode = false;
                            $scope.showEditTableMode = false;
                        };
                        $scope.ShowAddOrEditDialog = function () {
                            return( $scope.showAddTableMode ||  $scope.showEditTableMode );
                        };
                        $scope.ShowTableDialog = function () {
                            return !( $scope.showAddTableMode ||  $scope.showEditTableMode ||$scope.showDBScript|| $scope.showGlobalLayer||$scope.showDataAccess||$scope.showBusinessLogic||$scope.showPresentation||$scope.showJsonObject);
                        };
                        $scope.ShowEditTableMode = function () {
                            $scope.closeAll();
                            $scope.showEditTableMode=true
                            $scope.NewTable =  $scope.SelectTable ;
                          
                        }
                        $scope.InsertNewTable = function () {
                        
                                                            
                            //  var Description=$scope.NewTable.Description.replace(/\n/g,'*').split("	");
                            var Description=$scope.NewTable.Description.replace(/\n/g,'*	').replace(/\t/g,'	').split("	");
                                    //console.log(Description);
                                                        
                            $scope.NewTable.Columns=[];
                            var i='1';
                        while (i == '*' ||i=='1' ) {
                            var Col= {
                                ColumnName: Description.shift(),
                                ISPrimaryKey: (i=='1'),
                                Type: Description.shift(),
                                Size: 0,
                                //  NotNull: ('False'==Description.shift()),
                                NotNull: ('No'==Description.shift()),
                                Description: Description.shift(),
                                Unique: (i=='1'),
                                DefaultValue: "",
                                ISForeignKey: false,
                            };
                            Col.ISForeignKey=(Col.Description=='FK');
                            $scope.NewTable.Columns.push(Col);
                            i=  Description.shift();
                        }
                        if( $scope.showAddTableMode==true)
                        {  $scope.Tables.push($scope.NewTable);}
                        
                            
                        $scope.Search(  $scope.NewTable.TableName);
                        $scope.CancelInsert();
                        
                        
                        
                        };
                        $scope.RemoveTable = function (TableIndex) {
                            
                            $scope.Tables.splice(TableIndex, 1);
                        };

                        
                        $scope.EditColumnMode = false;
                        $scope.EditColumn = {};
                        $scope.ShowOrHideEditColumnMode = function (PColumn) {
                            $scope.EditColumnMode = !$scope.EditColumnMode;
                            $scope.EditColumn = PColumn;
                        };

                        $scope.FilterColumnMode = false;
                        $scope.FilterColumn = {};
                        $scope.ShowOrHideFilterColumnMode = function () {
                            $scope.FilterColumnMode = !$scope.FilterColumnMode;
                        };
                        $scope.CancelColumnFilter = function () {
                            $scope.FilterColumnMode = !$scope.FilterColumnMode;
                            $scope.FilterColumn = {};
                        };

                        $scope.InsertColumnMode = false;
                        $scope.NewColumn = {};
                        $scope.ShowOrHideInsertColumnMode = function () {
                            $scope.InsertColumnMode = !$scope.InsertColumnMode;
                        };
                        $scope.CancelColumnInsert = function () {
                            $scope.NewColumn = {};
                            $scope.InsertColumnMode = false;
                        };
                        $scope.InsertNewColumn = function (PTable) {
                            PTable.Columns.push($scope.NewColumn);
                            $scope.NewColumn = {};
                            $scope.InsertColumnMode = false;

                        };
                        $scope.RemoveColumn = function (PTable, ColumnIndex) {
                            
                            PTable.Columns.splice(ColumnIndex, 1);
                            
                        };

                        $scope.SortColumn = "TableName";
                        $scope.SortDesc = false;
                        $scope.SortData = function (ColumnName) {
                            $scope.SortDesc = ($scope.SortColumn == ColumnName ? !$scope.SortDesc : false);
                            $scope.SortColumn = ColumnName;

                        };
                        $scope.GetSortClass = function (ColumnName) {
                            if ($scope.SortColumn == ColumnName)
                            { return $scope.SortDesc ? "arrow down" : "arrow up"; }
                            return "";
                        };
                    
                        
            
                        
                    
                        $scope.SearchText = "Emp";
                        $scope.OptionSearchMenu = "";
                        $scope.TableSearchMenu = "";
            $scope.closeAll=function(){
                $scope.showEditTableMode = false;
                $scope.showAddTableMode = false;
                $scope.showDBScript = false;
                 $scope.showGlobalLayer = false;
                 $scope.showDataAccess = false;
                 $scope.showBusinessLogic = false;
                 $scope.showPresentation = false;
                 $scope.showJsonObject=false;
            }

            $scope.Search=function(Text)
            { 
                
                $scope.SearchText = { TableName: Text };
                $scope.closeAll();
                $scope.Tables.forEach(element => {
                   if(element.TableName== Text )
                  { console.log(element);
                    $scope.SelectTable= element;
                     }
                });
            };
          
            $scope.getYear=function()
            { 
                var d = new Date();
                return d.getFullYear();
            };
              
           
    
            
   });

    
                    

  $(document).ready(function(){
      $('[data-toggle="tooltip"]').tooltip(); 
     
      $("a[href='#top']").click(function() {
          $('.dropdown').removeClass('open');
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
      }); 


      $(window).scroll(function () {
          if ($(this).scrollTop() > 200) {
              $('#back-to-top').fadeIn(200);
          } else {
              $('#back-to-top').fadeOut(200);
          }
      });




  });



        // var Tables = [
        //                             {
        //                                 AreaName:"URS",
        //                                 TableName: "Emp",
        //                                 Description:"",
        //                                 Columns: [
        //                                       {
        //                                           ColumnName: "Eno",
        //                                           Description: "",
        //                                           ISPrimaryKey: true,
        //                                           Type: "",
        //                                           Size: 0,
        //                                           NotNull: true,
        //                                           Unique: true,
        //                                           DefaultValue: "",
        //                                           ISForeignKey: false,
        //                                       },
        //                                    {
        //                                        ColumnName: "Ename",
        //                                        Description: "",
        //                                        ISPrimaryKey: false,
        //                                        Type: "",
        //                                        Size: 50,
        //                                        NotNull: true,
        //                                        Unique: true,
        //                                        DefaultValue: "",
        //                                        ISForeignKey: false,
        //                                    },
        //                                      {
        //                                          ColumnName: "Salary",
        //                                          Description: "",
        //                                          ISPrimaryKey: false,
        //                                          Type: "",
        //                                          Size: 0,
        //                                          NotNull: false,
        //                                          Unique: false,
        //                                          DefaultValue: "",
        //                                          ISForeignKey: false,
        //                                      },
                                                
        //                                 ],
                        


        //                             },

        // ];