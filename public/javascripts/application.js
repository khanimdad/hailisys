// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

// http://dean.edwards.name/my/flicker.html
try {
  document.execCommand("BackgroundImageCache", false, true);
} catch(err) {}

var activeImg=1;
var speed = 2;
var crossobj;
var contentheight;
//iens6=document.all||document.getElementById;

//dmsdesigns namespace
YAHOO.namespace('dmsdesigns');
//global variable
var gY = YAHOO.dmsdesigns;

//DMS Menubar
var dms_menu_bar = function () {
//Instantiate MenuBar, passing in the id of the HTML element representing the MenuBar
var oMenuBar = new YAHOO.widget.MenuBar("dms_menubar", {autosubmenudisplay: true},{position: "dynamic"});
YAHOO.util.Event.addListener(window, "load", dms_menu_bar);
// Render the MenuBar instance
oMenuBar.render();
oMenuBar.show();
};


//DMS Slider
var dms_slider = function () {
  slider = YAHOO.widget.Slider.getVertSlider("slider-bg","slider-thumb", 0, 175);
        
  slider.subscribe("change", function(offsetFromStart) {
            var valnode = YAHOO.util.Dom.get("content_desc");
            //valnode.innerHTML = offsetFromStart;
            valnode.innerHTML = valnode.innerHTML;
  });    
};

//DMS Overlays
dms_overlays_ = function () {
  // Build Overlays
	feedbackOverlay = new YAHOO.widget.Overlay("feedbackOverlay", {visible:false} );
	notificationOverlay = new YAHOO.widget.Overlay("notificationOverlay", {visible:false} );
	emailpageOverlay = new YAHOO.widget.Overlay("emailpageOverlay", {visible:false} );
	disclaimerOverlay = new YAHOO.widget.Overlay("disclaimerOverlay", {visible:false} );
	
  feedbackOverlay.render();
	emailpageOverlay.render();
	notificationOverlay.render();
	disclaimerOverlay.render();
	
	//Feedback Overlay
	YAHOO.util.Event.addListener("feedback", "click", feedbackOverlay.show, feedbackOverlay, true);
	YAHOO.util.Event.addListener("hide-overlay", "click", feedbackOverlay.hide, feedbackOverlay, true);
	YAHOO.util.Event.addListener("send-feedback", "click", feedbackOverlay.hide, feedbackOverlay, true);

	//Notification Overlay	
	YAHOO.util.Event.addListener("send-feedback", "click", notificationOverlay.show, notificationOverlay, true);
	
	//Email This Page Overlay
	YAHOO.util.Event.addListener("emailthispage", "click", emailpageOverlay.show, emailpageOverlay, true);
	YAHOO.util.Event.addListener("hide-overlay-email", "click", emailpageOverlay.hide, emailpageOverlay, true);
	YAHOO.util.Event.addListener("email-this-page", "click", emailpageOverlay.hide, emailpageOverlay, true);
	
	//Disclaimer Overlay	
	YAHOO.util.Event.addListener("disclaimer", "click", disclaimerOverlay.show, disclaimerOverlay, true);
	YAHOO.util.Event.addListener("hide-overlay-disclaimer", "click", notificationOverlay.hide, disclaimerOverlay, true);
};


displayHomeIconGreen = function(obj) {
    obj.src='/images/home_icon_green.png';
};

displayHomeIconGray = function(obj) {
    obj.src='/images/home_icon_gray.png';
};

displayImageActualSize = function(imgSource,obj, galSize) {
  var spinnerLoadImg = YAHOO.util.Dom.get('imageloadOverlay');
    var dummyImage = YAHOO.util.Dom.get('dummy-image')
  YAHOO.util.Dom.setStyle(spinnerLoadImg, 'display', 'block');
    dummyImage.src = imgSource;
  var panelImage = document.getElementById('panel-image');
  panelImage.style.backgroundImage = 'url(' + imgSource + ')';
  activeGalleryImage(obj, galSize);
  //window.setTimeout("gY.hideSpinner('imageloadOverlay')",2300);
};

activeGalleryImage = function(obj, galSize){
  for(var i=1;i<=galSize;i++){
    var galImage = document.getElementById(i);
    var outBox = document.getElementById('o_'+i);
    if(i==obj.id){
      YAHOO.util.Dom.addClass(galImage, 'active-gallery-thumbnail');
      activeImg = obj.id;
      //YAHOO.util.Dom.setStyle(galImage, 'border', '1px solid #808079');   
    }
    else{
      YAHOO.util.Dom.removeClass(galImage, 'active-gallery-thumbnail');
      YAHOO.util.Dom.setStyle(galImage, 'border', '1px solid #D9D9CE');
      YAHOO.util.Dom.setStyle(outBox, 'border', '1px solid #ffffff');
      YAHOO.util.Dom.setStyle(outBox, 'backgroundColor', '#ffffff');
    }
  }
}
setBlank = function(obj, val) {
  if(val == 'receiver'){
    gY.default_value = "Enter <friend\'s e-mail address>";
  }
  else if(val == 'sender'){
    gY.default_value = "Enter your <name or email address>";
  }
  else{
    gY.default_value = val.toString();
  }
  if(obj.value.toString() == gY.default_value){
    obj.value = '';
  }
  else{
    obj.value = obj.value;
    obj.select();
  }
}

validateInput = function(obj) {
  if(obj.value == ''){
    obj.value = gY.default_value;
  }
  else{
    obj.value = obj.value;
  }
};

//Google Map Embedding function
loadGoogleMap = function() {
  if (GBrowserIsCompatible()) {
    var map = new GMap2(document.getElementById("dms-map"));
    map.setCenter(new GLatLng(28.554041,77.249855), 15);
    var latlng = new GLatLng(28.554041,77.249855);
    map.addOverlay(new GMarker(latlng));
  }
};

//initializing overlays
gY.initOverlay = function() {
  var feedbackOverlay = YAHOO.util.Dom.get('feedbackOverlay');
  var disclaimerOverlay = YAHOO.util.Dom.get('disclaimerOverlay');
  var notificationOverlay = YAHOO.util.Dom.get('notificationOverlay');
  var emailOverlay = YAHOO.util.Dom.get('emailOverlay');
  var consultantsOverlay = YAHOO.util.Dom.get('consultantsOverlay');
  var spinnerOverlay = YAHOO.util.Dom.get('spinnerOverlay');
  var wipOverlay = YAHOO.util.Dom.get('wipOverlay');
  var clientwipOverlay = YAHOO.util.Dom.get('clientwipOverlay');
  
  
  gY.feedbackOverlay = new YAHOO.widget.Overlay(feedbackOverlay, {
    visible: false,
    constraintoviewport: true,
    //zIndex: 26,
    draggable: false,
    underlay: false
  });
  
  gY.disclaimerOverlay = new YAHOO.widget.Overlay(disclaimerOverlay, {
    visible: false,
    constraintoviewport: true,
    draggable: false,
    underlay: false
  });
  
  gY.emailOverlay = new YAHOO.widget.Overlay(emailOverlay, {
    visible: true,
    constraintoviewport: true,
    draggable: false,
    underlay: false
  });
  
  gY.consultantsOverlay = new YAHOO.widget.Overlay(consultantsOverlay, { 
    visible: false, 
    constraintoviewport: true,
    draggable: false,
    underlay: false  
  });
  
  gY.notificationOverlay = new YAHOO.widget.Overlay(notificationOverlay, { 
    visible: false, 
    constraintoviewport: true,
    draggable: false,
    underlay: false
  });
  
  gY.spinnerOverlay = new YAHOO.widget.Overlay(spinnerOverlay, { 
    visible : false,
    constraintoviewport: true,
    draggable: false,
    underlay: false  
  });
  
  gY.wipOverlay = new YAHOO.widget.Overlay(wipOverlay, { 
    visible : false,
    constraintoviewport: true,
    draggable: false,
    underlay: false  
  });
  
  gY.clientwipOverlay = new YAHOO.widget.Overlay(clientwipOverlay, { 
    visible : false,
    constraintoviewport: true,
    draggable: false,
    underlay: false  
  });

  gY.feedbackOverlay.render();
  gY.disclaimerOverlay.render();
  gY.emailOverlay.render();
  gY.consultantsOverlay.render();
  gY.notificationOverlay.render();
  gY.spinnerOverlay.render();
  //gY.wipOverlay.render();
  //gY.clientwipOverlay.render();
  
}

gY.showOverlay = function(obj,x,y){
  gY.hideOpenedOverlay(obj);
  var container = obj + 'Overlay'; //feedbackOverlay, disclaimerOverlay etc
  var overlay = eval('gY.' + obj + 'Overlay');
  if (overlay) gY.setTranslucent(overlay.element);
  var xy = YAHOO.util.Dom.getXY(container);
  YAHOO.util.Dom.setStyle(container, 'display', 'block');
  if(obj == 'notification' || obj == 'spinner' || obj == 'wip'){
    xy[1] =  xy[1]; 
    xy[0] =  xy[0];
    if (overlay) overlay.cfg.setProperty('xy', xy);
  }
  else{
    if (overlay)
      overlay.cfg.setProperty("fixedcenter", true); 
  }
  if (overlay) { overlay.show(false, overlay) };
  
  if(obj=='feedback' || obj=='email'){
    var target_id = 'send-' + obj.toString();
    target = YAHOO.util.Dom.get(target_id);
    YAHOO.util.Event.removeListener(target, "click");
    YAHOO.util.Event.addListener(target, "click", overlay.hide, overlay, true);
  }
  
}

gY.showMessage = function(obj){
  var container = obj + 'Overlay'; 
  var overlay = eval('gY.' + container);
  var xy = YAHOO.util.Dom.getXY(container);
  YAHOO.util.Dom.setStyle(container, 'display', 'block');
  xy[1] =  xy[1]; 
  xy[0] =  xy[0];
  if (overlay) overlay.cfg.setProperty('xy', xy);
  if(obj=='wip'){
    var placeholder = YAHOO.util.Dom.get('image-gallery');
    YAHOO.util.Dom.setStyle(placeholder, 'display', 'none');
  }
  if(obj=='clientwip'){
    var placeholder = YAHOO.util.Dom.get('client-panel-image');
    YAHOO.util.Dom.setStyle(placeholder, 'display', 'none');
  }
  
  if (overlay) { overlay.show(false, overlay) };
}


gY.hideOverlay = function(obj){
  var arr = obj.split('-');
  var index = parseInt(arr.length - 1);
  obj = arr[index];
  var overlay = eval('gY.' + obj + 'Overlay');
  if (overlay) gY.removeTranslucent(overlay.element);
  //YAHOO.util.Dom.setStyle(container, 'display', 'none');
  if (overlay) { overlay.hide(false, overlay) };
}

gY.hideOpenedOverlay = function(obj){
  var arrOverlays = new Array("feedback", "email", "disclaimer", "consultants");
  for(i=0;i<arrOverlays.length;i++){
    if(obj.toString() != arrOverlays[i].toString()){
      var oV = eval('gY.' + arrOverlays[i].toString() + 'Overlay');
      //var container = eval(arrOverlays[i].toString() + 'Overlay');
      //YAHOO.util.Dom.setStyle(container, 'display', 'none');
      if (oV) { oV.hide(false, oV) };
    }
  }
}
gY.notificationShow = function(){
  window.setTimeout('gY.notificationHide()',6000);
}
gY.notificationHide = function(e){
  YAHOO.util.Dom.setStyle('notificationOverlay', 'display', 'none');
}

gY.hideSpinner = function(el){
  if(el=='wipOverlay'){
      var placeholder = YAHOO.util.Dom.get('image-gallery');
      YAHOO.util.Dom.setStyle(placeholder, 'display', 'block');
  }
  if(el=='clientwipOverlay'){
      var placeholder = YAHOO.util.Dom.get('client-panel-image');
      YAHOO.util.Dom.setStyle(placeholder, 'display', 'block');
  }
  YAHOO.util.Dom.setStyle(el, 'display', 'none');
}

setDefaults = function(){
  //To get rid of outline 
  for(var i in A = document.getElementsByTagName('a')) {   
	  A[i].onmousedown = function() {     
	  	//this.blur(); // most browsers 
	  	this.hideFocus = true; // ie 
	  	this.style.outline = 'none'; // mozilla   
	  }   
	  A[i].onmouseout = A[i].onmouseup = function() {     
		  //this.blur(); // most browsers     
		  this.hideFocus = false; // ie
		  YAHOO.util.Dom.setStyle(this, 'outline', 'none') // mozilla
		  // this.style.outline = null; // mozilla   
	  }
  }
    crossobj=document.getElementById("content-desc");
    if(crossobj) contentheight=crossobj.offsetHeight;
    
    //preloading images
    var closeIcon = new Image(15,15);
    closeIcon.src = "/images/close_hover_icon.png";
    
    //set active
    var el = document.getElementById('1');
    if(el){
      el.style.border = '1px solid #808079';
      el.parentNode.style.border = '1px solid #999991';
      el.parentNode.style.backgroundColor = '#D9D9CE';
    }
}

gY.setTranslucent = function(el){
//  YAHOO.util.Dom.addClass(el,'remove-transparent');
    YAHOO.util.Dom.addClass('dms-trans','transparent');
};

gY.removeTranslucent = function(el){
//  YAHOO.util.Dom.removeClass(el,'remove-transparent');
    YAHOO.util.Dom.removeClass('dms-trans','transparent');
};

gY.clearInputFeedback = function(){
  YAHOO.util.Dom.get('name').value = 'Name';
  YAHOO.util.Dom.get('occupation').value = 'Occupation';
  YAHOO.util.Dom.get('email_id').value = 'Please enter your e-mail address';
  YAHOO.util.Dom.get('comments').value = 'Please enter your comments here';
};

gY.clearInputEmail = function(){
  YAHOO.util.Dom.get('receiver_id').value = 'Enter <friend\'s e-mail address>';
  YAHOO.util.Dom.get('sender_id').value = 'Enter your <name or email address>';
  YAHOO.util.Dom.get('message').value = 'Please enter your comments here';
}

gY.setHoverGallery = function(){
  var oBoxGal = document.getElementsByClassName('outer-box-gallery');
  oBoxGal.each(function(item){
    Event.observe(item,'mouseover',function(){
      //Element.addClassName(this,'outer-box-gallery');
      this.style.border = '1px solid #999991';
      this.style.backgroundColor = '#D9D9CE';
      var ch = this.childNodes;
      for(var j=0;j<ch.length;j++){
        if(!isNaN(ch.item(j).id)){
          YAHOO.util.Dom.setStyle(ch.item(j),'border','1px solid #999991')
        }
      }
    }.bind(item));
    
    Event.observe(item,'click',function(){
      //Element.addClassName(this,'outer-box-gallery');
      this.style.border = '1px solid #999991';
      this.style.backgroundColor = '#D9D9CE';
      var ch = this.childNodes;
      for(var j=0;j<ch.length;j++){
        if(!isNaN(ch.item(j).id)){
          YAHOO.util.Dom.setStyle(ch.item(j),'border','1px solid #999991')
        }
      }
    }.bind(item));
    
    Event.observe(item,'mouseout',function(){
      //Element.removeClassName(this,'outer-box-gallery');
      var ch = this.childNodes;
      for(var j=0;j<ch.length;j++){
        if(!isNaN(ch.item(j).id)){
          if((ch.item(j).id)== activeImg){
            //this.style.border = '1px solid #999991';
            //this.style.backgroundColor = '#D9D9CE';
            YAHOO.util.Dom.setStyle(ch.item(j),'border','1px solid #808079'); 
          }
          else{
            this.style.border = '1px solid #FFFFFF';
            this.style.backgroundColor = '#FFFFFF';
            YAHOO.util.Dom.setStyle(ch.item(j),'border','1px solid #D9D9CE');
          }
          
        }
      }
    }.bind(item));
  });
}

gY.setHoverPaginator = function(){
  if(!window.getComputedStyle){
    var oBoxPag = document.getElementsByClassName('outer-box-paginator');
    oBoxPag.each(function(item){
      Event.observe(item,'mouseover',function(){
        this.style.border = '1px solid #999991';
        this.style.backgroundColor = '#D9D9CE';
        var childs = item.childNodes;
        for(var j=0;j<childs.length;j++){
          YAHOO.util.Dom.setStyle(childs.item(j),'border','1px solid #999991');
        }
      }.bind(item));
      Event.observe(item,'mouseout',function(){
        this.style.border = '1px solid #FFFFFF';
        this.style.backgroundColor = '#FFFFFF';
        var childs = this.childNodes;
        for(var j=0;j<childs.length;j++){
          var bColor = childs.item(j).currentStyle['color'];
          if(bColor.toString() == '#40403d'){
            YAHOO.util.Dom.setStyle(childs.item(j),'border','1px solid #40403D');
          }else{
            YAHOO.util.Dom.setStyle(childs.item(j),'border','1px solid #D9D9CE');
          }
          
        }
      }.bind(item));
    });
  }
}

//scroller
gY.scrollUp = function(){
    if(parseInt(crossobj.style.top)<=0)
      crossobj.style.top=parseInt(crossobj.style.top)+speed+"px";
    gY.moveupvar=setTimeout("gY.scrollUp()",30);
    
    //if(!window.getComputedStyle)
      //document.getElementById('goup').style.background = "transparent url(/images/up_icon.png?3) no-repeat 100% 123%";
}

gY.scrollDown = function(){
    if(parseInt(crossobj.style.top)>=(contentheight*(-1)+180))
      crossobj.style.top=parseInt(crossobj.style.top)-speed+"px";
    gY.movedownvar=setTimeout("gY.scrollDown()",30);
    
    //if(!window.getComputedStyle)
      //document.getElementById('godown').style.background = "transparent url(/images/down_icon.png?3) no-repeat 0% 115%";
}

gY.timeoutUp = function(){
  clearTimeout(gY.moveupvar);
  //if(!window.getComputedStyle)
    //document.getElementById('goup').style.background = "transparent url(/images/up_icon.png?3) no-repeat 100% -23%";
}

gY.timeoutDown = function(){
  clearTimeout(gY.movedownvar);
  //if(!window.getComputedStyle)
    //document.getElementById('godown').style.background = "transparent url(/images/down_icon.png?3) no-repeat 0% -15%";
}

