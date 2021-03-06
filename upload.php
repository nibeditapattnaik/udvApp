<!DOCTYPE html>
<html>
<head>
    <title>File Download with Text Editor</title>
    <!--<link rel = "stylesheet" type = "text/css" href="plugin/codemirror/lib/codemirror.css">-->
    <link rel = "stylesheet" type = "text/css" href="css/style.css">
</head>
    <body>
        <div id = "editor">
            
                <input type="file" id = "fileToBeLoaded">
                <input type="button" id = "save" value = "Save File" onclick="saveFile();">
            
        </div><br/><center>
    <textarea class = "codemirror-textarea" id="myText"></textarea></center>
        <!--<script type = "text/javascript" src ="js/jquery.min.js"></script>
        <script type="text/javascript" src="plugin/codemirror/lib/codemirror.js"></script>
        <script type="text/javascript" src="script/default.js"></script>-->
        <script>
                //$(document).ready(function(){
                  document.getElementById("fileToBeLoaded").onchange = function(){
                    var file = document.getElementById("fileToBeLoaded").files[0];
                    var fileReader = new FileReader();
                    fileReader.onload = function(e){
                        var text = e.target.result;
                        document.getElementById("myText").value = text;
                    }
                    fileReader.readAsText(file, "UTF-8");
                };
                function saveFile(){
                    var saveText = document.getElementById("myText").value;
                    var textBLOB = new Blob([saveText], {text: "text/plain"});
                    var fileName = prompt("Enter File Name");
                    var link = document.createElement("a");
                    link.download =fileName;
                    link.innerHTML = "Download File";
                    if (fileName === null){
                        return;
                    }
                    if(window.URL != null){
                        link.href = window.URL.createObjectURL(textBLOB);
                    }else{
                        link.href = window.URL.createObjectURL(textBLOB);
                        link.onclick = destroy;
                        link.style.display = "none";
                        document.body.appendChild(link);
                    }
                    link.click();
                }
               function destroy(e){
                   document.body.removeChild(e.target);
               }
            
                /*var code = $(".codemirror-textarea")[0];
                var editor = CodeMirror.fromTextArea(code,{
                    lineNumbers : true
                });*/
            //});
            </script>
    </body>
</html>
<?php
    $targetPath = "C://uploads";
    
?>
