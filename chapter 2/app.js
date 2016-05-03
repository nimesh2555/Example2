  var vm = function(){
            var self = this;
            self.Comment= ko.observable('')
            self.CommentList = ko.observableArray([]);
            
            self.AddComment = function(){
                if(self.Comment() != ''){
                    self.CommentList.push(self.Comment())
                    self.Comment('')
                }
            }
        }    
    
        $(document).ready(function(){
            
             ko.applyBindings(new vm());
        })
       
    