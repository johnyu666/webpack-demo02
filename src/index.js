import './style.css';
import $ from 'jquery';
import Icon from './icon.gif';
import user from './user.json';

$("<div></div>").text("Ok")
.addClass("hello")
.addClass("hello1")
.appendTo("body");

$("<img/>").attr("src",Icon).appendTo("body");

var div=document.createElement("div");
div.innerHTML=user.name+"xxxx"+user.age;
div.classList.add('hello');
document.body.appendChild(div);
