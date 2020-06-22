var gulp = require('gulp');
const winInstaller = require('electron-winstaller');

//var winInstaller = require('electron-windows-installer');



gulp.task('create-windows-installer', function (done) {

    winInstaller.createWindowsInstaller({

        appDirectory: '.',

        outputDirectory: './release',
        arch: 'ia32',
        authors: "Syncfusion",
        version: "1.0.0",
        noMsi:true

    }).then().catch();

});
