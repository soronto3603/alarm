/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

 var today=new Date();
 var count=0;
window.onload=()=>{
    date_reload();
    add_alarm(0,'12','30','21',count++);
}
function date_reload(){
    document.getElementById('date').innerHTML=today.getDate();
    document.getElementById('year').innerHTML=today.getMonth()+1+'/'+today.getFullYear();
}
function prev(){
    today.setDate(today.getDate()-1);
    date_reload();
}
function next(){
    today.setDate(today.getDate()+1);
    date_reload();
}
function add_new_alarm(){
    add_alarm(0,document.getElementById('hour').value,document.getElementById('minute').value,document.getElementById('second').value,count++);
    
}
function add_alarm(week,hour,minute,second,count){
    var html='<div class="alarm-li">';
    html+='<input id="alarm-'+count+'" type="checkbox" class="on-off" checked>';
    html+='<div class="alarm-list-inf clearfix"><div class="pull-left"><span class="alarm-bell"></span></div>';
    html+='<div class="pull-left"><div class="alarm-info"><div class="alarm-time">'+hour+':'+minute+':'+second+'</div><div class="alarm-repeat">';
    html+='<span class="active">SU</span><span>MO</span><span class="active">TU</span><span class="active">WE</span><span>TH</span>';
    html+='<span class="active">FR</span><span class="active">SA</span></div></div></div><div class="pull-right">';
    html+='<label class="alarm-toggle" for="alarm-'+count+'"></label></div></div> </div>';
    document.getElementById('alarmstart').innerHTML+=html;
}
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);

        console.log('Received Event: ' + id);
    }
};

app.initialize();