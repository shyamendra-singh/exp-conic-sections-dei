// ------------------ first two slides ------------------

const page1 = document.getElementById("container");
const page2 = document.getElementById("container2");


function openlinks(){
  document.getElementById("btn1").addEventListener("click", () => {
    parent.location = "./links.html";
  });
}

function openindex(){

document.getElementById("btn2").addEventListener("click", () => {
 parent.location="./index.html"
});
}

// ----------------------options-------------------------

function drop() {
  const trans1 = document.getElementById("trans1"); // Assuming 'trans1' is an element ID
  const arr1 = document.getElementById("arr1"); // Assuming 'arr1' is an element ID
  const dropMenu1 = document.getElementById("dropMenu1"); // Assuming 'dropMenu1' is an element ID
  const arrow1 = document.getElementById("arrow1");
  trans1.style.visibility = "hidden";
  arr1.style.visibility = "hidden";
  dropMenu1.style.visibility = "visible";

  dropMenu1.addEventListener("change", (evt) => {
    let selectedValue = dropMenu1.value;
    if (selectedValue === "3hPencil") {
      dropMenu1.style.visibility = "hidden";
      document.getElementById("whitebox2").style.visibility = "hidden";
      arrow1.style.visibility = "visible";
    } else {
      alert("Please select 3H Pencil");
    }
  });
}


function drop2() {
  // Assuming 'trans2', 'arr1', 'dropMenu2', and 'arrow1' are HTML elements, fetch them using getElementById.
  const trans2 = document.getElementById("trans2");
  const arr1 = document.getElementById("arr1");
  const arr2 = document.getElementById("arr2");
  const dropMenu2 = document.getElementById("dropMenu2");
  const arrow1 = document.getElementById("arrow1");

  // Hide 'trans2', 'arr1', and show 'dropMenu2'
  trans2.style.visibility = "hidden";
  arr1.style.visibility = "hidden";
  dropMenu2.style.visibility = "visible";

  // Add a change event listener to 'dropMenu2'
  dropMenu2.addEventListener("change", (evt) => {
    let selectedValue = dropMenu2.value; // Corrected variable name to 'dropMenu2'

    if (selectedValue === "hPencil") {
      // If 'hPencil' is selected, hide 'dropMenu2' and 'whitebox3', and show 'arrow1'
      dropMenu2.style.visibility = "hidden";
      document.getElementById("whitebox3").style.visibility = "hidden";
      arr2.style.visibility = "visible";
    } else {
      // If a different value is selected, show an alert
      alert("Please select H Pencil");
    }
  });
}

function drop3() {
  // Assuming 'trans2', 'arr1', 'dropMenu2', and 'arrow1' are HTML elements, fetch them using getElementById.
  const trans3 = document.getElementById("trans3");
  const arr3 = document.getElementById("arr3");
  const dropMenu3 = document.getElementById("dropMenu3");
  const arrow12 = document.getElementById("arrow12");

  // Hide 'trans2', 'arr1', and show 'dropMenu2'
  trans3.style.visibility = "hidden";
  arr3.style.visibility = "hidden";
  dropMenu3.style.visibility = "visible";

  // Add a change event listener to 'dropMenu2'
  dropMenu3.addEventListener("change", (evt) => {
    let selectedValue = dropMenu3.value; // Corrected variable name to 'dropMenu2'

    if (selectedValue === "3hPencil") {
      // If 'hPencil' is selected, hide 'dropMenu2' and 'whitebox3', and show 'arrow1'
      dropMenu3.style.visibility = "hidden";
      document.getElementById("whitebox4").style.visibility = "hidden";
      arrow12.style.visibility = "visible";
    } else {
      // If a different value is selected, show an alert
      alert("Please select 3H Pencil");
    }
  });
}

function gif1() {
  document.getElementById("one").style.visibility = "hidden";
  document.getElementById(



    "whitebox").style.visibility = "hidden";
  document.getElementById("arrow1").style.visibility = "hidden";
  document.getElementById("gif1").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("transbox2").style.visibility = "hidden";
    document.getElementById("transbox3").style.visibility = "visible";
    document.getElementById("gif1").style.visibility = "hidden";
    document.getElementById("one").style.visibility = "visible";
    document.getElementById("arrow1").style.visibility = "visible";
  }, 7000);
}

function gif2() {
  document.getElementById("one").style.visibility = "hidden";
  document.getElementById("arrow1").style.visibility = "hidden";
  document.getElementById("gif2").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("arrow1").style.visibility = "visible";
    document.getElementById("transbox3").style.visibility = "hidden";
    document.getElementById("one").style.visibility = "hidden";
    document.getElementById("transbox4").style.visibility = "visible";
    document.getElementById("gif2").style.visibility = "hidden";
    document.getElementById("two").style.visibility = "visible";
  }, 6500);
}

// ---------------question1 starts here-----------------

// ------------------ step1 ----------------------

function gif3() {
  document.getElementById("arrow1").style.visibility = "hidden";
  document.getElementById("gif3").style.visibility = "visible";
  document.getElementById("two").style.visibility = "hidden";
  // document.getElementById("next1").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("next").style.visibility = "visible";
    document.getElementById("gif3").style.visibility = "hidden";
    document.getElementById("three").style.visibility = "visible";
  }, 5500);
}

// ------------------ step2 ----------------------

function gif4() {
  document.getElementById("four").style.visibility = "hidden";
  document.getElementById("arrow2").style.visibility = "hidden";
  document.getElementById("gif4").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("gif4").style.visibility = "hidden";
    document.getElementById("five").style.visibility = "visible";
    document.getElementById("transbox5").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "visible";
  }, 7500);
}

// ------------------ step3 ----------------------

function gif5() {
  document.getElementById("arrow10").style.visibility = "hidden";
  document.getElementById("transbox6").style.visibility = "hidden";
  document.getElementById("five").style.visibility = "hidden";
  document.getElementById("gif5").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("gif5").style.visibility = "hidden";
    document.getElementById("six").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible";
  }, 7540);
}

// ------------------ step4 ----------------------

function gif7() {
  document.getElementById("seven").style.visibility = "hidden";
  document.getElementById("whitebox1").style.visibility = "hidden";
  document.getElementById("arrow10").style.visibility = "hidden";
  document.getElementById("gif6").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("next").style.visibility = "visible";
  }, 9600);
}

// ------------------ step5 ----------------------

function gif8() {
  document.getElementById("seven").style.visibility = "hidden";
  document.getElementById("arrow10").style.visibility = "hidden";
  document.getElementById("gif7").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("gif7").style.visibility = "hidden";
    document.getElementById("eight").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible";
  }, 7500);
}

// ------------------ step6 ----------------------

function gif9() {
  document.getElementById("nine").style.visibility = "hidden";
  document.getElementById("arrow11").style.visibility = "hidden";
  document.getElementById("gif9").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("next").style.visibility = "visible";
    document.getElementById("gif9").style.visibility = "hidden";
    document.getElementById("ten").style.visibility = "visible";
  }, 15000);
}

// ----------------------step7---------------------

function gif10() {
  document.getElementById("eleven").style.visibility = "hidden";
  document.getElementById("arrow4").style.visibility = "hidden";
  document.getElementById("gif10").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("next").style.visibility = "visible";
    document.getElementById("gif10").style.visibility = "hidden";
    document.getElementById("twelve").style.visibility = "visible";
  }, 50000);
}
// ----------------------step8---------------------

function gif11() {
  document.getElementById("thirteen").style.visibility = "hidden";
  document.getElementById("arrow5").style.visibility = "hidden";
  document.getElementById("gif11").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("arrow6").style.visibility = "visible";
    document.getElementById("transbox10").style.visibility = "visible";
  }, 2000);
}

function gif12() {
  document.getElementById("transbox9").style.visibility = "hidden";
  document.getElementById("gif11").style.visibility = "hidden";
  document.getElementById("arrow6").style.visibility = "hidden";
  document.getElementById("transbox10").style.visibility = "hidden";
  document.getElementById("gif12").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("gif12").style.visibility = "hidden";
    document.getElementById("fourteen").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible";
  }, 5500);
}

// -----------------step9--------------------

function gif13() {
  document.getElementById("fifteen").style.visibility = "hidden";
  document.getElementById("arrow5").style.visibility = "hidden";
  document.getElementById("gif13").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("gif13").style.visibility = "hidden";
    document.getElementById("sixteen").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible";
  }, 42200);
}

// -----------------step10--------------------

function gif14() {
  document.getElementById("seventeen").style.visibility = "hidden";
  document.getElementById("arr2").style.visibility = "hidden";
  document.getElementById("gif14").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("gif14").style.visibility = "hidden";
    document.getElementById("eighteen").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible";
  }, 3500);
}

// -----------------step11--------------------

function gif15() {
  document.getElementById("nineteen").style.visibility = "hidden";
  document.getElementById("arrow1").style.visibility = "hidden";
  document.getElementById("gif15").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("gif15").style.visibility = "hidden";
    document.getElementById("twenty").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible";
  }, 7500);
}

// -----------------step12--------------------

function gif16() {
  document.getElementById("twenty").style.visibility = "hidden";
  document.getElementById("arrow4").style.visibility = "hidden";
  document.getElementById("gif16").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("arrow8").style.visibility = "visible";
    document.getElementById("gif16").style.visibility = "hidden";
    document.getElementById("twentytwo").style.visibility = "visible";
    document.getElementById("transbox8").style.visibility = "hidden";
    document.getElementById("transbox13").style.visibility = "visible";
  }, 9200);
}
function gif17() {
  document.getElementById("twentytwo").style.visibility = "hidden";
  document.getElementById("arrow8").style.visibility = "hidden";
  document.getElementById("gif17").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("gif17").style.visibility = "hidden";
    document.getElementById("twentythree").style.visibility = "visible";
    document.getElementById("transbox8").style.visibility = "hidden";
    document.getElementById("transbox13").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "visible";
  }, 7200);
}

// ---------------------step13---------------------------

function gif18() {
  document.getElementById("transbox14").style.visibility = "hidden";
  document.getElementById("twentyfour").style.visibility = "hidden";
  document.getElementById("arr2").style.visibility = "hidden";
  document.getElementById("gif18").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("gif18").style.visibility = "hidden";
    document.getElementById("twentyfive").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible";
  }, 9000);
}

// ----------------------step14------------------------

function gif19() {
  document.getElementById("transbox15").style.visibility = "hidden";
  document.getElementById("twentysix").style.visibility = "hidden";
  document.getElementById("arrow9").style.visibility = "hidden";
  document.getElementById("gif19").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("gif19").style.visibility = "hidden";
    document.getElementById("twentyseven").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible";
  }, 7400);
}

// -------------------------from here question-2 started---------------

// -----------------------question-2 step-1---------------------

function q2gif1(){
  document.getElementById("thirty").style.visibility="hidden";
  document.getElementById("q2gif1").style.visibility="visible";
  document.getElementById("arrow12").style.visibility = "hidden";
  document.getElementById("transbox16").style.visibility="hidden"
  myTimeout=setTimeout(()=>{
    document.getElementById("arrow12").style.visibility = "visible";
    // document.getElementById("next").style.visibility = "visible";
    document.getElementById("transbox17").style.visibility="visible";
  },7000)
}

function q2gif2(){
  document.getElementById("arrow12").style.visibility = "hidden";
 document.getElementById("q2gif1").style.visibility="hidden"
 document.getElementById("q2gif2").style.visibility="visible"
  document.getElementById("transbox17").style.visibility="hidden"
  myTimeout=setTimeout(()=>{
    document.getElementById("arrow12").style.visibility = "visible";
    // document.getElementById("next").style.visibility = "visible";
    document.getElementById("transbox18").style.visibility="visible";
  },6500)
}

function q2gif3(){
  document.getElementById("arrow12").style.visibility = "hidden";
  document.getElementById("q2gif2").style.visibility="hidden"
  document.getElementById("q2gif3").style.visibility="visible"
 document.getElementById("transbox18").style.visibility="hidden"
 myTimeout=setTimeout(()=>{
   document.getElementById("q2gif3").style.visibility="hidden"
   document.getElementById("next").style.visibility = "visible";
    document.getElementById("thirtyone").style.visibility="visible";
  },5500)
}

// -----------------------question-2 step-2---------------------

function q2gif4(){
  document.getElementById("arrow17").style.visibility = "hidden";
  document.getElementById("q2gif4").style.visibility="visible"
  document.getElementById("transbox18").style.visibility="hidden"
 myTimeout=setTimeout(()=>{
   document.getElementById("next").style.visibility = "visible";
  },7500)
}

// -----------------------question-2 step-3---------------------

function q2gif5(){
  document.getElementById("arrow17").style.visibility = "hidden";
  document.getElementById("q2gif5").style.visibility="visible"
  document.getElementById("transbox18").style.visibility="hidden"
  document.getElementById("thirtytwo").style.visibility="hidden"
  myTimeout=setTimeout(()=>{
    document.getElementById("q2gif5").style.visibility="hidden"
   document.getElementById("thirtythree").style.visibility="visible"
   document.getElementById("next").style.visibility = "visible";
  },9500)
}

// -----------------------question-2 step-4--------------------



function q2gif28(){
  document.getElementById("arrow12").style.visibility = "hidden";
  document.getElementById("thirtyfour").style.visibility = "hidden";
  document.getElementById("q2gif28").style.visibility="visible"
  document.getElementById("transbox18").style.visibility="hidden"
  myTimeout=setTimeout(()=>{
    document.getElementById("next").style.visibility = "visible";
  },4000)
}


// -----------------------question-2 step-5---------------------

function q2gif6(){
  document.getElementById("arrow12").style.visibility = "hidden";
  document.getElementById("thirtyfour").style.visibility = "hidden";
  document.getElementById("q2gif6").style.visibility="visible"
  document.getElementById("transbox18").style.visibility="hidden"
  myTimeout=setTimeout(()=>{
    document.getElementById("arrow12").style.visibility = "visible";
    document.getElementById("thirtyfour").style.visibility="hidden"
    document.getElementById("transbox19").style.visibility = "visible";
    // document.getElementById("next").style.visibility = "visible";
  },11000)
}

function q2gif7(){
  document.getElementById("arrow12").style.visibility = "hidden";
  document.getElementById("q2gif6").style.visibility="hidden"
  document.getElementById("q2gif7").style.visibility="visible"
  document.getElementById("transbox19").style.visibility="hidden"
  myTimeout=setTimeout(()=>{
    document.getElementById("q2gif7").style.visibility="hidden"
    document.getElementById("thirtyfive").style.visibility="visible"
   document.getElementById("next").style.visibility = "visible";
  },7500)
}

// -----------------------question-2 step-6---------------------

function q2gif8(){
  document.getElementById("arrow12").style.visibility = "hidden";
  document.getElementById("transbox20").style.visibility="hidden"
  document.getElementById("thirtysix").style.visibility="hidden"
  document.getElementById("q2gif8").style.visibility="visible"
  myTimeout=setTimeout(()=>{
    document.getElementById("q2gif8").style.visibility="hidden"
    document.getElementById("thirtyseven").style.visibility="visible"
    document.getElementById("next").style.visibility = "visible";
  },22900)
}

// -----------------------question-2 step-7---------------------


function q2gif9(){
  document.getElementById("arrow12").style.visibility = "hidden";
  document.getElementById("transbox19").style.visibility="hidden"
  document.getElementById("thirtyeight").style.visibility="hidden"
  document.getElementById("q2gif9").style.visibility="visible"
  myTimeout=setTimeout(()=>{
    document.getElementById("arrow12").style.visibility = "visible";
    document.getElementById("q2gif9").style.visibility="hidden"
    document.getElementById("transbox20").style.visibility="visible"
    document.getElementById("thirtynine").style.visibility="visible"
  },45000)
}

function q2gif10(){
  document.getElementById("arrow12").style.visibility = "hidden";
  document.getElementById("transbox20").style.visibility="hidden"
  document.getElementById("thirtynine").style.visibility="hidden"
  document.getElementById("q2gif10").style.visibility="visible"
  myTimeout=setTimeout(()=>{
    document.getElementById("q2gif10").style.visibility="hidden"
    document.getElementById("fourty").style.visibility="visible"
    document.getElementById("next").style.visibility = "visible";
  },45000)
}

// -----------------------question-2 step-8---------------------

function q2gif11(){
  document.getElementById("arrow13").style.visibility = "hidden";
  document.getElementById("transbox21").style.visibility="hidden"
  document.getElementById("fourtyone").style.visibility="hidden"
  document.getElementById("q2gif11").style.visibility="visible"
  myTimeout=setTimeout(()=>{
    document.getElementById("q2gif11").style.visibility="hidden"
    document.getElementById("fourtytwo").style.visibility="visible"
    document.getElementById("next").style.visibility = "visible";
  },11000)
}

// -----------------------question-2 step-9---------------------

function q2gif30(){
  document.getElementById("arrow13").style.visibility = "hidden";
  document.getElementById("transbox21").style.visibility="hidden"
  document.getElementById("fourtyone").style.visibility="hidden"
  document.getElementById("q2gif30").style.visibility="visible"
  myTimeout=setTimeout(()=>{
    document.getElementById("q2gif30").style.visibility="hidden"
    document.getElementById("fourtytwo").style.visibility="visible"
    document.getElementById("next").style.visibility = "visible";
  },61000)
}

// -----------------------question-2 step-10---------------------


function q2gif19(){
  document.getElementById("arrow14").style.visibility = "hidden";
  document.getElementById("transbox22").style.visibility="hidden"
  document.getElementById("fourtythree").style.visibility="hidden"
  document.getElementById("q2gif19").style.visibility="visible"
  myTimeout=setTimeout(()=>{
    document.getElementById("arrow14").style.visibility = "visible";
    document.getElementById("q2gif19").style.visibility="hidden"
    document.getElementById("transbox23").style.visibility="visible"
    document.getElementById("fourtyfour").style.visibility="visible"
  },3700)
}

function q2gif20(){
  document.getElementById("arrow14").style.visibility = "hidden";
  document.getElementById("transbox23").style.visibility="hidden"
  document.getElementById("fourtyfour").style.visibility="hidden"
  document.getElementById("q2gif20").style.visibility="visible"
  myTimeout=setTimeout(()=>{
    document.getElementById("arrow15").style.visibility = "visible";
    document.getElementById("q2gif20").style.visibility="hidden"
    document.getElementById("fourtyfive").style.visibility="visible"
    document.getElementById("transbox24").style.visibility="visible"
  },3700)
}

function q2gif21(){
  document.getElementById("arrow15").style.visibility = "hidden";
  document.getElementById("transbox23").style.visibility="hidden"
  document.getElementById("fourtyfive").style.visibility="hidden"
  document.getElementById("q2gif21").style.visibility="visible"
  myTimeout=setTimeout(()=>{
    document.getElementById("q2gif21").style.visibility="hidden"
    document.getElementById("fourtysix").style.visibility="visible"
    document.getElementById("arrow12").style.visibility = "visible";
  },3700)
}

function q2gif22(){
  document.getElementById("arrow12").style.visibility = "hidden";
  document.getElementById("transbox23").style.visibility="hidden"
  document.getElementById("fourtyfive").style.visibility="hidden"
  document.getElementById("q2gif22").style.visibility="visible"
  myTimeout=setTimeout(()=>{
    document.getElementById("q2gif22").style.visibility="hidden"
    document.getElementById("fourtyseven").style.visibility="visible"
    document.getElementById("next").style.visibility = "visible";
  },5900)
}

    // -----------------------question-2 step-11---------------------

function q2gif23(){
  document.getElementById("arrow12").style.visibility = "hidden";
  document.getElementById("transbox20").style.visibility="hidden"
  document.getElementById("fourtyeight").style.visibility="hidden"
  document.getElementById("q2gif23").style.visibility="visible"
  myTimeout=setTimeout(()=>{
    document.getElementById("q2gif23").style.visibility="hidden"
    document.getElementById("fourtynine").style.visibility="visible"
    document.getElementById("next").style.visibility = "visible";
  },7500)
}
    // -----------------------question-2 step-12---------------------
    
    
    function q2gif24(){
      document.getElementById("arrow12").style.visibility = "hidden";
      document.getElementById("transbox20").style.visibility="hidden"
      document.getElementById("fourtynine").style.visibility="hidden"
      document.getElementById("q2gif24").style.visibility="visible"
      myTimeout=setTimeout(()=>{
        document.getElementById("arrow12").style.visibility = "visible";
        document.getElementById("q2gif24").style.visibility="hidden"
        document.getElementById("transbox25").style.visibility="visible"
        document.getElementById("fifty").style.visibility="visible"
      },9100)
    }
    
    function q2gif25(){
      document.getElementById("arrow12").style.visibility = "hidden";
      document.getElementById("transbox25").style.visibility="hidden"
      document.getElementById("fifty").style.visibility="hidden"
      document.getElementById("q2gif25").style.visibility="visible"
      myTimeout=setTimeout(()=>{
        document.getElementById("q2gif25").style.visibility="hidden"
        document.getElementById("fiftyone").style.visibility="visible"
        document.getElementById("next").style.visibility = "visible";
      },5500)
    }

    // -----------------------question-2 step-13---------------------

    
function q2gif26(){
  document.getElementById("arrow16").style.visibility = "hidden";
  document.getElementById("transbox22").style.visibility="hidden"
  document.getElementById("fiftytwo").style.visibility="hidden"
  document.getElementById("q2gif26").style.visibility="visible"
  myTimeout=setTimeout(()=>{
    document.getElementById("q2gif26").style.visibility="hidden"
    document.getElementById("fiftythree").style.visibility="visible"
    document.getElementById("next").style.visibility = "visible";
  },9500)
}
    // -----------------------question-2 step-13---------------------
    
function q2gif27(){
  document.getElementById("arrow16").style.visibility = "hidden";
  document.getElementById("transbox22").style.visibility="hidden"
  document.getElementById("fiftyfour").style.visibility="hidden"
  document.getElementById("q2gif27").style.visibility="visible"
  myTimeout=setTimeout(()=>{
    document.getElementById("q2gif27").style.visibility="hidden"
    document.getElementById("fiftyfive").style.visibility="visible"
    document.getElementById("next").style.visibility = "visible";
  },5600)
}
    
function q2gif41(){
  document.getElementById("arrow16").style.visibility = "hidden";
  document.getElementById("transbox28").style.visibility="hidden"
  document.getElementById("fiftyfour").style.visibility="hidden"
  document.getElementById("q2gif27").style.visibility="visible"
  myTimeout=setTimeout(()=>{
    document.getElementById("q2gif27").style.visibility="hidden"
    document.getElementById("fiftyfive").style.visibility="visible"
    document.getElementById("next").style.visibility = "visible";
  },5600)
}

// -----------------------question-2 step-14--------------------

function q2gif34(){
  document.getElementById("arrow12").style.visibility = "hidden";
  document.getElementById("thirtyfour").style.visibility = "hidden";
  document.getElementById("q2gif28").style.visibility="visible"
  document.getElementById("transbox18").style.visibility="hidden"
  myTimeout=setTimeout(()=>{
    document.getElementById("arrow12").style.visibility = "visible";
    document.getElementById("transbox26").style.visibility="visible"
    // document.getElementById("next").style.visibility = "visible";
  },4000)
}

function q2gif35(){
  document.getElementById("arrow12").style.visibility = "hidden";
  document.getElementById("q2gif28").style.visibility="hidden"
  document.getElementById("q2gif35").style.visibility="visible"
  document.getElementById("transbox18").style.visibility="hidden"
  myTimeout=setTimeout(()=>{
    document.getElementById("next").style.visibility = "visible";
  },10000)
}

  // -----------------------question-3 step-5--------------------

  function q2gif36(){
    document.getElementById("arrow12").style.visibility = "hidden";
    document.getElementById("fiftysix").style.visibility = "hidden";
    document.getElementById("transbox18").style.visibility = "hidden";
    document.getElementById("q2gif36").style.visibility="visible"
    myTimeout=setTimeout(()=>{
      document.getElementById("next").style.visibility = "visible";
      document.getElementById("q2gif36").style.visibility="hidden"
      document.getElementById("fiftyeight").style.visibility = "visible";
    },5900)
  }
  // -----------------------question-3 step-6--------------------

  function q2gif37(){
    document.getElementById("arrow12").style.visibility = "hidden";
    document.getElementById("fiftynine").style.visibility = "hidden";
    document.getElementById("transbox18").style.visibility = "hidden";
    document.getElementById("q2gif37").style.visibility="visible"
    myTimeout=setTimeout(()=>{
      document.getElementById("next").style.visibility = "visible";
      document.getElementById("q2gif37").style.visibility="hidden"
      document.getElementById("sixty").style.visibility = "visible";
    },15000)
  }

  // -----------------------question-3 step-7--------------------

  function q2gif38(){
    document.getElementById("arrow12").style.visibility = "hidden";
    document.getElementById("sixtyone").style.visibility = "hidden";
    document.getElementById("transbox19").style.visibility = "hidden";
    document.getElementById("q2gif38").style.visibility="visible"
    myTimeout=setTimeout(()=>{
      document.getElementById("next").style.visibility = "visible";
      document.getElementById("q2gif38").style.visibility="hidden"
      document.getElementById("sixtytwo").style.visibility = "visible";
    },53000)
  }

  // -----------------------question-3 step-8--------------------

  function q2gif39(){
    document.getElementById("arrow13").style.visibility = "hidden";
    document.getElementById("sixtythree").style.visibility = "hidden";
    document.getElementById("transbox21").style.visibility = "hidden";
    document.getElementById("q2gif39").style.visibility="visible"
    myTimeout=setTimeout(()=>{
      document.getElementById("next").style.visibility = "visible";
      document.getElementById("q2gif39").style.visibility="hidden"
      document.getElementById("sixtyfour").style.visibility = "visible";
    },43000)
  }
  // -----------------------question-3 step-9--------------------

  function q2gif40(){
    document.getElementById("arrow12").style.visibility = "hidden";
    document.getElementById("sixtysix").style.visibility = "hidden";
    document.getElementById("transbox27").style.visibility = "hidden";
    document.getElementById("q2gif40").style.visibility="visible"
    myTimeout=setTimeout(()=>{
      document.getElementById("next").style.visibility = "visible";
      document.getElementById("q2gif40").style.visibility="hidden"
      document.getElementById("sixtysix").style.visibility = "visible";
    },3500)
  }