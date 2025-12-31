window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  var player = GetPlayer();
var ô1 = player.GetVar('ô1');
var ô2 = player.GetVar('ô2');
var ô3 = player.GetVar('ô3');
var ô4 = player.GetVar('ô4');
var ô5 = player.GetVar('ô5');

// Swap the values using a temporary variable
var temp = ô1;
ô1 = ô3;
ô3 = temp;

// Update the variables with their new values
player.SetVar('ô1', ô1);
player.SetVar('ô2', ô2);
player.SetVar('ô3', ô3);
player.SetVar('ô4', ô4);
player.SetVar('ô5', ô5);
}

window.Script2 = function()
{
  var player = GetPlayer();
var ô1 = player.GetVar('ô1');
var ô2 = player.GetVar('ô2');
var ô3 = player.GetVar('ô3');
var ô4 = player.GetVar('ô4');
var ô5 = player.GetVar('ô5');

// Swap the values using a temporary variable
var temp = ô1;
ô1 = ô2;
ô2 = temp;

// Update the variables with their new values
player.SetVar('ô1', ô1);
player.SetVar('ô2', ô2);
player.SetVar('ô3', ô3);
player.SetVar('ô4', ô4);
player.SetVar('ô5', ô5);
}

window.Script3 = function()
{
  var player = GetPlayer();
var ô1 = player.GetVar('ô1');
var ô2 = player.GetVar('ô2');
var ô3 = player.GetVar('ô3');
var ô4 = player.GetVar('ô4');
var ô5 = player.GetVar('ô5');

// Swap the values using a temporary variable
var temp = ô2;
ô2 = ô3;
ô3 = temp;

// Update the variables with their new values
player.SetVar('ô1', ô1);
player.SetVar('ô2', ô2);
player.SetVar('ô3', ô3);
player.SetVar('ô4', ô4);
player.SetVar('ô5', ô5);
}

window.Script4 = function()
{
  var player = GetPlayer();
var ô1 = player.GetVar('ô1');
var ô2 = player.GetVar('ô2');
var ô3 = player.GetVar('ô3');
var ô4 = player.GetVar('ô4');
var ô5 = player.GetVar('ô5');

// Swap the values using a temporary variable
var temp = ô1;
ô1 = ô2;
ô2 = temp;

// Update the variables with their new values
player.SetVar('ô1', ô1);
player.SetVar('ô2', ô2);
player.SetVar('ô3', ô3);
player.SetVar('ô4', ô4);
player.SetVar('ô5', ô5);
}

window.Script5 = function()
{
  var player = GetPlayer();
var ô1 = player.GetVar('ô1');
var ô2 = player.GetVar('ô2');
var ô3 = player.GetVar('ô3');
var ô4 = player.GetVar('ô4');
var ô5 = player.GetVar('ô5');

// Swap the values using a temporary variable
var temp = ô2;
ô2 = ô3;
ô3 = temp;

// Update the variables with their new values
player.SetVar('ô1', ô1);
player.SetVar('ô2', ô2);
player.SetVar('ô3', ô3);
player.SetVar('ô4', ô4);
player.SetVar('ô5', ô5);
}

window.Script6 = function()
{
  var player = GetPlayer();
var ô1 = player.GetVar('ô1');
var ô2 = player.GetVar('ô2');
var ô3 = player.GetVar('ô3');
var ô4 = player.GetVar('ô4');
var ô5 = player.GetVar('ô5');

// Swap the values using a temporary variable
var temp = ô1;
ô1 = ô3;
ô3 = temp;

// Update the variables with their new values
player.SetVar('ô1', ô1);
player.SetVar('ô2', ô2);
player.SetVar('ô3', ô3);
player.SetVar('ô4', ô4);
player.SetVar('ô5', ô5);
}

window.Script7 = function()
{
  var player = GetPlayer();
for (var i = 1; i <= 99; i++) {
    var inp = "dien_" + i;          // thay giá trị biến ở đây
    var ans = player.GetVar(inp);             
    var check = false;

    ans = ans.trim();
    ans = ans.replace(/\s+/g, ' ');
    player.SetVar(inp, ans);                  

    if (/[a-zA-Z]/.test(ans) || isNaN(parseFloat(ans.replace(/,/g, '.')))) {
        check = true;
    } else {
        var result = parseFloat(ans.replace(/\s+/g, '').replace(/,/g, '.'));
        function addSpaceSeparators(number) {
            var parts = number.toString().split('.');
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
            return parts.join('.');
        }
        var formattedResult = addSpaceSeparators(result);
        var Result1 = formattedResult.replace(/\./g, ','); // Thay dấu . thành ,
        player.SetVar(inp, Result1);             
    }
}

}

window.Script8 = function()
{
  var player = GetPlayer();

    var inp = "dien_1_2";          // thay giá trị biến ở đây
    var ans = player.GetVar(inp);             
    var check = false;

    ans = ans.trim();
    ans = ans.replace(/\s+/g, ' ');
    player.SetVar(inp, ans);                  

    if (/[a-zA-Z]/.test(ans) || isNaN(parseFloat(ans.replace(/,/g, '.')))) {
        check = true;
    } else {
        var result = parseFloat(ans.replace(/\s+/g, '').replace(/,/g, '.'));
        function addSpaceSeparators(number) {
            var parts = number.toString().split('.');
          
            return parts.join('.');
        }
        var formattedResult = addSpaceSeparators(result);
        var Result1 = formattedResult.replace(/\./g, ','); // Thay dấu . thành ,
        player.SetVar(inp, Result1);             
    }

}

window.Script9 = function()
{
  var player = GetPlayer();
for (var i = 1; i <= 99; i++) {
    var inp = "dien_" + i;          // thay giá trị biến ở đây
    var ans = player.GetVar(inp);             
    var check = false;

    ans = ans.trim();
    ans = ans.replace(/\s+/g, ' ');
    player.SetVar(inp, ans);                  

    if (/[a-zA-Z]/.test(ans) || isNaN(parseFloat(ans.replace(/,/g, '.')))) {
        check = true;
    } else {
        var result = parseFloat(ans.replace(/\s+/g, '').replace(/,/g, '.'));
        function addSpaceSeparators(number) {
            var parts = number.toString().split('.');
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
            return parts.join('.');
        }
        var formattedResult = addSpaceSeparators(result);
        var Result1 = formattedResult.replace(/\./g, ','); // Thay dấu . thành ,
        player.SetVar(inp, Result1);             
    }
}

}

window.Script10 = function()
{
  var player = GetPlayer();
for (var i = 1; i <= 99; i++) {
    var inp = "dien_" + i;          // thay giá trị biến ở đây
    var ans = player.GetVar(inp);             
    var check = false;

    ans = ans.trim();
    ans = ans.replace(/\s+/g, ' ');
    player.SetVar(inp, ans);                  

    if (/[a-zA-Z]/.test(ans) || isNaN(parseFloat(ans.replace(/,/g, '.')))) {
        check = true;
    } else {
        var result = parseFloat(ans.replace(/\s+/g, '').replace(/,/g, '.'));
        function addSpaceSeparators(number) {
            var parts = number.toString().split('.');
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
            return parts.join('.');
        }
        var formattedResult = addSpaceSeparators(result);
        var Result1 = formattedResult.replace(/\./g, ','); // Thay dấu . thành ,
        player.SetVar(inp, Result1);             
    }
}

}

window.Script11 = function()
{
  var player = GetPlayer();

    var inp = "dien_1_2";          // thay giá trị biến ở đây
    var ans = player.GetVar(inp);             
    var check = false;

    ans = ans.trim();
    ans = ans.replace(/\s+/g, ' ');
    player.SetVar(inp, ans);                  

    if (/[a-zA-Z]/.test(ans) || isNaN(parseFloat(ans.replace(/,/g, '.')))) {
        check = true;
    } else {
        var result = parseFloat(ans.replace(/\s+/g, '').replace(/,/g, '.'));
        function addSpaceSeparators(number) {
            var parts = number.toString().split('.');
          
            return parts.join('.');
        }
        var formattedResult = addSpaceSeparators(result);
        var Result1 = formattedResult.replace(/\./g, ','); // Thay dấu . thành ,
        player.SetVar(inp, Result1);             
    }

}

window.Script12 = function()
{
  var player = GetPlayer(); 

function findLMSAPI(win) {
if (win.hasOwnProperty("GetStudentID")) return win;
else if (win.parent == win) return null;
else return findLMSAPI(win.parent);
}
var lmsAPI = findLMSAPI(this);

var finalRawScore = player.GetVar("Tongcau_Dung_1");        //thay biến điểm
var passPercent = 1;                      //thay giá trị điểm mục tiêu
var scoreScale = finalRawScore/8;   //thay giá trị điểm tối đa

SCORM2004_objAPI.SetValue('cmi.score.scaled', scoreScale);
SCORM2004_objAPI.SetValue('cmi.score.raw', finalRawScore);
SCORM2004_objAPI.SetValue('cmi.score.min', '1');
SCORM2004_objAPI.SetValue('cmi.score.max', '8');  //thay giá trị điểm tối đa

if (SCORM2004_objAPI.GetValue('cmi.score.raw') >= passPercent) 
{
  SCORM2004_objAPI.SetValue("cmi.success_status","passed");
  SCORM2004_objAPI.SetValue("cmi.completion_status","completed"); 
}
  else
{ 
  SCORM2004_objAPI.SetValue("cmi.success_status","failed");
  SCORM2004_objAPI.SetValue("cmi.completion_status","incomplete"); 

}
}

};
