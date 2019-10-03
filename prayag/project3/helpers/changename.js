var random=require("randomstring")
module.exports=function(name){
    var arr=name.split(".")
    var n=arr.length
    var ext=arr[n-1]
    var rand=random.generate()
    var new_name=rand + "." + ext

    return {name:new_name,ext:ext}

}