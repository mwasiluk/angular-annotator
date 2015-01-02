angular.module('mwAnnotator', []);

angular.module('mwAnnotator').directive('mwAnnotator', function () {

    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var options = {};
            if(attrs.mwAnnotator){
                options = scope.$eval(attrs.mwAnnotator);
            }

            var annotator = angular.element(element).annotator(options).data('annotator');
            annotator.addPlugin('Unsupported');

            if(attrs.annotatorTags){
                annotator.addPlugin('Tags');
            }

            if(attrs.annotatorPermissions){
                var permissionsOptions = scope.$eval(attrs.annotatorPermissions);
                annotator.addPlugin('Permissions', permissionsOptions);
            }

            if(attrs.annotatorStore){
                var storeOptions = scope.$eval(attrs.annotatorStore);
                annotator.addPlugin('Store', storeOptions);
            }

            if(attrs.annotatorFilter){
                var filterOptions = scope.$eval(attrs.annotatorFilter);
                annotator.addPlugin('Filter', filterOptions);
            }

            if(attrs.annotatorAuth){
                var authOptions = scope.$eval(attrs.annotatorAuth);
                annotator.addPlugin('Auth', authOptions);
            }


            if(attrs.annotatorMarkdown){
                annotator.addPlugin('Markdown');
            }

            if(attrs.annotatorPlugins){
                var pluginList = scope.$eval(attrs.annotatorPlugins);
                if(pluginList instanceof Array){
                    for(var i=0; i<pluginList.length; i++){
                        var plugin = pluginList[i];


                        var pluginName = null;
                        var pluginOptions = null;
                        if(typeof plugin === 'object'){
                            pluginName = plugin.name;
                            pluginOptions = plugin.options;
                        }else if(typeof plugin === 'string'){
                            pluginName = plugin;
                        }
                        if(pluginName){
                            if(!pluginOptions){
                                annotator.addPlugin(pluginName)
                            }else{
                                annotator.addPlugin(pluginName, pluginOptions);
                            }

                        }

                    }
                }
            }
        }
    };
});
