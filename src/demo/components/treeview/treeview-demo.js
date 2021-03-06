"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var directory_1 = require("./directory");
var TreeviewDemo = (function () {
    function TreeviewDemo() {
        this.loadDirectories();
    }
    TreeviewDemo.prototype.loadDirectories = function () {
        var fall2014 = new directory_1.Directory('Fall 2014', [], ['image1.jpg', 'image2.jpg', 'image3.jpg']);
        var summer2014 = new directory_1.Directory('Summer 2014', [], ['image10.jpg', 'image20.jpg', 'image30.jpg']);
        var pics = new directory_1.Directory('Pictures', [summer2014, fall2014], []);
        var music = new directory_1.Directory('Music', [], ['song1.mp3', 'song2.mp3']);
        this.directories = [pics, music];
    };
    return TreeviewDemo;
}());
TreeviewDemo = __decorate([
    core_1.Component({
        selector: 'treeview-demo',
        template: "<h1>Recursive TreeView</h1>\n             <treeview [directories]=\"directories\"></treeview>"
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], TreeviewDemo);
exports.TreeviewDemo = TreeviewDemo;
//# sourceMappingURL=treeview-demo.js.map