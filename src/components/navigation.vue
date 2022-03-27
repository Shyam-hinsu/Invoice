<template>
  <header class="flex">
      <div class="branding flex">
          <img src="@/assets/file-invoice-dollar-solid.png" alt="" srcset="">
      </div>
  </header>
</template>

<script>
export default {
 name:'Navigation'
}
</script>

<style lang='scss' scoped>
header {
    z-index:99;
    flex-direction: row;
    background-color: #1e2139; 
    @media(min-width:900px){
        min-height:100%;
        min-width: 90px;
        border-radius: 0px 20px 20px 0;
          z-index:1 !important;
    }

    .branding {
        border-radius: 0px 20px 20px 0;
        background-color: #7c5dfa;
        justify-content: center;
        padding: 24px;
        height: fit-content;
         @media(min-width:900px){
             width: 100%;

         }
    }

    img{
        width:auto;
        height:30px;
        
    }

}

</style>