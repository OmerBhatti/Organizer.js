const fs = require("fs")
const path = require('path')
var scriptName = path.basename(__filename);

const softwareFormats = [".exe",".msi", ".com,",".bat",".bin",".cmd",".ps1",".vbs"]
const audioFormats = [".mp3",".m4a",".wav",".wma",".aac",".flac"]
const videoFormats = [".mp4",".mov",".3gp",".wmv",".webm",".flv",".ogg"]
const docFormats = [".txt",".doc",".pdf",".html",".xls",".xlsx",".ppt",".pptx"]
const imageFormats = [".jpg",".jpeg",".png",".webp",".webm",".flv",".ogg"]

fs.readdir(".", function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    files.forEach(file => {
        if(isFile(file)){
            const extension = path.extname(file);
            if(softwareFormats.includes(extension)) {
                //put it in Software folder
                const dir = "Softwares";
                if (!fs.existsSync(dir)){
                    fs.mkdirSync(dir);
                }
                move(file, dir);
                console.log(file);
            }
            else if(audioFormats.includes(extension)) {
                //put it in Music folder
                const dir = "Music";
                if (!fs.existsSync(dir)){
                    fs.mkdirSync(dir);
                }
                move(file, dir);
                console.log(file);
            }
            else if(videoFormats.includes(extension)) {
                //put it in Video folder
                const dir = "Videos";
                if (!fs.existsSync(dir)){
                    fs.mkdirSync(dir);
                }
                move(file, dir);
                console.log(file);
            }
            else if(docFormats.includes(extension)) {
                //put it in Document folder
                const dir = "Documents";
                if (!fs.existsSync(dir)){
                    fs.mkdirSync(dir);
                }
                move(file, dir);
                console.log(file);
            }
            else if(imageFormats.includes(extension)) {
                //put it in Images folder
                const dir = "Images";
                if (!fs.existsSync(dir)){
                    fs.mkdirSync(dir);
                }
                move(file, dir);
                console.log(file);
            }
            else{
                //put it in Data folder
                if(isFile(file))
                {
                    if(file!=scriptName)
                    {
                        const dir = "other";
                        if (!fs.existsSync(dir)){
                            fs.mkdirSync(dir);
                        }
                        move(file, dir);
                        console.log(file);
                    }
                }
            }
        }});
});

var move = (from, to)=>{
    //gets file name and adds it to dir2
    var f = path.basename(from);
    var dest = path.resolve(to, f);
  
    fs.rename(from, dest, (err)=>{
      if(err) throw err;
      else console.log(from+' Successfully moved');
    });
};

var isFile = (name)=>{
    console.log(name);
    if(name)
    {
        for (let i = name.length; i >= 0 ; i--) {
            if(name[i]==='.'){
                return true;
            }
        }
    }
    return false;
}