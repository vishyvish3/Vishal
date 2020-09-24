"use strict";
var tv = /** @class */ (function () {
    function tv(videoLinks) {
        this.channel = videoLinks;
        this.currentchannel = 0;
        this.player = document.createElement("video");
        this.player.setAttribute("id", "tv_video");
        this.player.setAttribute("type", "video/mp4");
        this.player.volume = 0.5;
        document.querySelector("#container").append(this.player);
    }
    tv.prototype.powerOnOff = function () {
        if (!this.player.getAttribute("src")) {
            this.player.setAttribute("src", this.channel[this.currentchannel]);
            this.player.load();
            this.player.play();
        }
        else {
            this.player.setAttribute("src", "");
        }
    };
    tv.prototype.changeChannel = function (value) {
        // debugger;
        this.currentchannel += value;
        if (this.currentchannel < 0) {
            this.currentchannel = this.channel.length - 1;
            this.player.setAttribute("src", this.channel[this.currentchannel]);
            this.player.load();
            this.player.play();
        }
        else if (this.currentchannel == this.channel.length) {
            this.currentchannel = 0;
            this.player.setAttribute("src", this.channel[this.currentchannel]);
            this.player.load();
            this.player.play();
        }
        else {
            this.player.setAttribute("src", this.channel[this.currentchannel]);
            this.player.load();
            this.player.play();
        }
    };
    tv.prototype.volumeControl = function (value) {
        if (this.player.volume > 0 && this.player.volume < 1) {
            this.player.volume += value;
        }
    };
    tv.prototype.mute = function () {
        this.player.muted = !this.player.muted;
    };
    tv.prototype.pause = function () {
        if (!this.player.paused) {
            this.player.pause();
        }
        else {
            this.player.play();
        }
    };
    return tv;
}());
var videos = [
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
];
var tvObject = new tv(videos);
var TV = function (operation) {
    switch (operation) {
        case "power":
            tvObject.powerOnOff();
            break;
        case "mute":
            tvObject.mute();
            break;
        case "pause":
            tvObject.pause();
            break;
        case "increaseVolume":
            tvObject.volumeControl(+0.10);
            break;
        case "decreaseVolume":
            tvObject.volumeControl(-0.10);
            break;
        case "nextChannel":
            tvObject.changeChannel(+1);
            break;
        case "prevChannel":
            tvObject.changeChannel(-1);
            break;
        default:
            break;
    }
};
