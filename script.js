
// get the constante

const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;


// if click to next buuton in form go to the next div
nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

// if click to prev buuton in form go to the previous div

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

// function that update FormSteps
function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

// function that update Progressbar
function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx <= formStepsNum ) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");
  progress.style.width = ((progressActive.length - 1) / (progressSteps.length - 1)) * 98 + "%";
}


// get variables
const btn_create = document.querySelector('.btn-create');
const form = document.querySelector('.form');
var pro_gress = document.querySelector('.pro_gress');
var all = document.querySelector('#all');
var prev = document.querySelector('#prev');



// click prev button in the final result to Edit 
prev.addEventListener("click", () => {
  form.style.opacity = '1';
  form.style.display = 'block';

  all.style.display = 'none';
  all.style.opacity = '0';
})





// click on create button 

btn_create.addEventListener("click", () => {


//  get the values of input 

var firstname = document.querySelectorAll(".name")[0].value;
var lastname = document.querySelectorAll(".lastname")[0].value;
var phone = document.querySelectorAll(".phone")[0].value;
var D_birth = document.querySelectorAll(".D_birth")[0].value;
var JobName = document.querySelectorAll(".job")[0].value;
var aboutMe = document.querySelectorAll(".aboutMe")[0].value; 
var Emaill = document.querySelectorAll(".email")[0].value; 
var adress = document.querySelectorAll(".adress")[0].value; 



var Eudi_1 = document.querySelectorAll(".Eudi_1")[0].value;
var Eudi_2 = document.querySelectorAll(".Eudi_2")[0].value;
var Eudi_3 = document.querySelectorAll(".Eudi_3")[0].value;
var Eudi_4 = document.querySelectorAll(".Eudi_4")[0].value;

var percent1 = document.querySelectorAll(".skill1")[0].value;
var percent2 = document.querySelectorAll(".skill2")[0].value;
var percent3 = document.querySelectorAll(".skill3")[0].value;
var percent4 = document.querySelectorAll(".skill4")[0].value;
var percent5 = document.querySelectorAll(".skill5")[0].value;
var percent6 = document.querySelectorAll(".skill6")[0].value;

var skil_1 = document.querySelector(".skil_1").value;
var skil_2 = document.querySelector(".skil_2").value;
var skil_3 = document.querySelector(".skil_3").value;
var skil_4 = document.querySelector(".skil_4").value;
var skil_5 = document.querySelector(".skil_5").value;
var skil_6 = document.querySelector(".skil_6").value;




// if the value of percentage is null dont show the persentage of skill   

if(percent1.length == 0){  
  document.querySelector(".Skill_one").style.display = 'none';
}else{
  document.querySelector(".Skill_one").style.display = 'block';
}

if(percent2.length == 0){  
  document.querySelector(".Skill_two").style.display = 'none';
}else{
  document.querySelector(".Skill_two").style.display = 'block';
}


if(percent3.length == 0){  
  document.querySelector(".Skill_three").style.display = 'none';
}else{
  document.querySelector(".Skill_three").style.display = 'block';
}

if(percent4.length == 0){  
  document.querySelector(".Skill_four").style.display = 'none';
}else{
  document.querySelector(".Skill_four").style.display = 'block';
}

if(percent5.length == 0){  
  document.querySelector(".Skill_five").style.display = 'none';
}else{
  document.querySelector(".Skill_five").style.display = 'block';
}

if(percent6.length == 0){  
  document.querySelector(".Skill_six").style.display = 'none';
}else{
  document.querySelector(".Skill_six").style.display = 'block';
}

// replace the percentage value in the progress bar

  $('.skill_1').val(percent1);
  $('.skill_2').val(percent2);
  $('.skill_3').val(percent3);
  $('.skill_4').val(percent4);
  $('.skill_5').val(percent5);
  $('.skill_6').val(percent6);

 

  // write every value in the perfect place in cv

  document.querySelector(".Aff_name").innerHTML= firstname ;
  document.querySelector(".Aff_lastname").innerHTML= lastname;
  document.querySelector(".Aff_birthday").innerHTML= phone;
  document.querySelector(".Aff_number").innerHTML= D_birth; 
  document.querySelector(".Aff_JobName").innerHTML= JobName; 
  document.querySelector(".Aff_aboutMe").innerHTML= aboutMe; 
  document.querySelector(".Aff_Email").innerHTML= Emaill;
  document.querySelector(".Aff_adress").innerHTML= adress;

  document.querySelector(".Aff_Eudi_1").innerHTML= Eudi_1;
  document.querySelector(".Aff_Eudi_2").innerHTML= Eudi_2;
  document.querySelector(".Aff_Eudi_3").innerHTML= Eudi_3;
  document.querySelector(".Aff_Eudi_4").innerHTML= Eudi_4;

  document.querySelector(".Title_Skill_1").innerHTML= skil_1;
  document.querySelector(".Title_Skill_2").innerHTML= skil_2;
  document.querySelector(".Title_Skill_3").innerHTML= skil_3;
  document.querySelector(".Title_Skill_4").innerHTML= skil_4;
  document.querySelector(".Title_Skill_5").innerHTML= skil_5;
  document.querySelector(".Title_Skill_6").innerHTML= skil_6;








  

// shows the cv and hide the form 

  form.style.opacity = '0';
  pro_gress.style.opacity = '1';
  
  setTimeout(function() {
    form.style.display = 'none';
    pro_gress.style.display = 'block';

  function progress() {
  const progressBar = document.querySelector('.pro_gress');
  const iter = (value = 0) => {
    if (value <= 100) {
      progressBar.setAttribute('value', value);
      setTimeout(() => iter(value + 2), 60);
    }else{
      pro_gress.style.opacity = '0';
      setTimeout(function() {
      pro_gress.style.display = 'none';
      all.style.display = 'block';
      all.style.opacity = '1';
    }, 1000);

    }
  };
  iter();
}
progress();

  }, 1000);



  

})

// read the profile picture

function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#profile_pic')
                        .attr('src', e.target.result);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }




// dowload cv button
function download_cv(){
var jqchild = document.createElement('script');
jqchild.src = "https://cdnjs.cloudflare.com/ajax/libs/jQuery.print/1.5.1/jQuery.print.min.js";
document.getElementsByTagName('body')[0].appendChild(jqchild);
$(".cv").print(); 
}