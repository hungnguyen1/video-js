(function() {
    
     videojs.myElement = videojs.Component.extend({                           
                            init: function(player, options) {
                                videojs.Component.call(this, player, options);
                            }
                        
                        });

      videojs.myElement.prototype.options_ = {};
      
     videojs.myElement.prototype.createEl = function(tagName, props) {
        var myDiv = videojs.createEl('div', {
                className: 'vjs-myclass-container'
        });
        
        
         return myDiv.appendChild(this);
     }

    var pluginFn = function(options) {
        var myComponent = new videojs.myElement(this, options);
    
        var el = this.addChild(myComponent);
        console.log(el);
    }
    
    videojs.plugin('myPlugin', pluginFn);
})();