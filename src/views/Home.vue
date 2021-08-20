<template>
<div class="row">
  <div class=" col-12 col-md-12 signIn-form">
    <div class="stripe">
      <img src="../assets/stripeimgf.svg" alt="">
    </div>
     <div class="stripe3">
       <img src="../assets/stripeimdt.svg" alt="">
    </div>
    <div class="stripe2">
      <img src="../assets/stripeimgs.svg" alt="">
    </div> 
    <div class="row">
    <div class="signIn-border col-12 col-md-12">
      <div class="row">
      <div class="signIn-header col-12 col-md-12 ml-3">
         <h3 class="header1" >stripe</h3>
         <div class="row col-12 col-md-12">
        
         <div class="signIn-body mt-5 m-0 py-4">
           <div class="row px-5">
             <div class=" col-12 col-md-12">
             <div class="row mt-5">
             <div class="col-md col-md-12">
               <h3 class="header2">Sign in to Your acount</h3>
             </div>
             </div>
             <div class="row">
               <div class="col-12 col-md-12">
                 <h3 class="header3 mt-3">Email</h3>

               </div>
               </div>
               <div class="row">
                 <div class="col-12 col md-12 mt-2">
                  
                   <input class="form-control py-3" type="text" v-model="email" placeholder="jane.doe@gmail.com" required>
                   
                 </div>
               </div>
               <div class="row mt-4">
                 <div class="col-12 col-md-12">
                 <div class="row m-0">
                 <div class=" col-12 col-md-3 p-0 mb-2 header4">password</div>
                 <div class=" col-12 col-md-9 mb-4 header5 p-0">Forget your password?</div>
                 </div>
                 </div>
                 <div class=" col-12 col-md-12 mt-2">
                    <span class=""><i class="pi pi-eye d-flex justify-content-end"></i></span>
                   <input type="password" v-model="password" class="form-control py-3" placeholder="........" required>
                   
                  </div>
               </div>
               <div class="row mt-4">
                 <div class="col-12 col-md-12 checkbox1">
                 <input type="checkbox" name="" id="">
                 <span class="m-1">Stay signed in for a week</span>
                 
                 
                 </div>
               </div>
               <div class="row mt-4">
                 <div class="col-12 col-md-12 p-0 m-0 text-center">
                   <button class="btn btn-success py-3" @click="login">continue</button>
                   <!-- <button class="buttonClick">Continue</button> -->
                 </div>

               </div>
               <div class="row mt-4 mb-5">
                 <div class="col-12 col-md-12">
                   <h3 class="header6">Use single sign-on (SSO) instead</h3>
      
                 </div>
                
               </div>
               

           </div>
           </div>

         </div>
         </div>
         <div class="row mt-5">
           <div class="row">
           <div class="col-12 col-md-12 ml-0">
           <h3 class="header7">Don't have an account? <a class="signUp" href="">Sign up</a> </h3>
           </div>
           </div>
           <div class="row">
           <div class="col-md-12">
             <h3 class="header8"> <span class="mx-1 my-3">&#169;</span> Copy@right . Contact . privacy & terms</h3>
             
           </div>
           </div>

         </div>

    
      </div>
      </div>
      

    </div>
    </div>
    
   
    
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    
  },
  data() {
    return {
      email:'',
      password: ''
    }
  },
  methods:{
    login(){
      if(this.email === '' && this.password === ''){
        this.$toast.add({
                severity:'error',
                summary:'Confirmed',
                detail:'Enter your Email and Password',
                life: 4000
                });
                return false
      }else{
        this.$router.push('/dashboard')
      }
    }

  }
}
</script>
<style scoped>
.signIn-form{
position: relative;
width: 100%;
height: 900px;
background:#FFFFFF; ;
}
.signIn-border{
width: 80%;
height: 900px;
background:#FFFFFF;
margin: auto;
border-left: solid 1px #E3E8EE;
border-right: solid 1px #E3E8EE;
}
.signIn-header{
width: 60%;
height: 900px;
background:#FFFFFF;
margin: auto;
border-left: dashed #E3E8EE 1px;
border-right: dashed #E3E8EE 1px;
}
.header1{
font-style: normal;
padding-left: 46px;
color: #000000;
margin-top: 50px;
font-size: 30px;
font-weight: bolder;
line-height: 50px;

}
.signIn-body{
margin: auto; 
width: 100%;
height: auto;
background: #FFFFFF;
box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.12), 0px 15px 35px rgba(60, 66, 87, 0.08);
border-radius: 4px;
}
.header2{
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;
display: flex;
color: #3C4257;
}
.header3{
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 17px;
display: flex;
align-items: center;
color: #3C4257
}
.header4{
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 17px;
display: flex;
align-items: start;
text-align: left;
color: #3C4257;
}
.header5{
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 17px;
align-items: end;
text-align: right;
color: #635CFF;
}
.checkbox1{
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 17px;
display: flex;
align-items: center;
color: #3C4257;
}
.btn{
  padding: 0 40%;
  color: #FFFFFF;
  background: #635CFF!important;
  border-color: #635CFF!important;
}
.header6{
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 17px;
text-align: center;
color: #635CFF;
}
.header7{
font-style: normal;
font-weight: 500;
font-size: 17px;
line-height: 17px;
align-items: center;
margin-left: 15px;
display: flex;
color: #4F566B;
}
.header8{
font-style: normal;
font-weight: 500;
font-size: 17px;
line-height: 17px;
display: flex;
align-items: center;
color: #697386;
margin-left: 15px;
}
a.signUp{
font-style: normal;
font-weight: 500;
font-size: 17px;
line-height: 17px;
display: flex;
align-items: center;
color: #635CFF;

}
.pi{
  margin-bottom: -35px;
  margin-right: 15px;
}
.stripe{
position: absolute;
left: 78.19%;
right: -0.03%;
top: 28.33%;
bottom: 59.78%;
/* background: rgba(12, 0, 250, 0.5);  */
}
.stripe2{
position: absolute;
left: 0%;
right: 78.16%;
top: 59.11%;
bottom: 29%
}
.stripe3{
position: absolute;
left: 1.46%;
right: 87.5%;
top: 59.22%;
bottom: 32.61%
}

</style>
