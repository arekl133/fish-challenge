<template>
<Slider />
      <section class="homeBox">
        <div class="leftBox">
          <h1>Czy jestes gotowy na <span>FISH CHALENGE</span>?</h1>
          <img src="@/assets/images/wedkarz.jpg" alt="" srcset="">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio libero sint, cum, voluptatum asperiores sapiente ullam quaerat dolorum natus tempora molestiae perspiciatis nam dolore dignissimos saepe voluptatibus eum praesentium excepturi!
          Dolorum sint maiores in sapiente asperiores accusamus obcaecati tenetur voluptatibus, exercitationem eum natus nemo itaque. Optio at laboriosam atque odit deleniti totam minima corporis impedit quae? Porro veniam temporibus commodi?</p>
        </div>
        <div class="rightBox">
          <article class="artHome">
            <img src="@/assets/images/szczupak.jpg" alt="" srcset="">
            <h1>Bądź jak <span>szczupak</span> nie daj sie pokonać</h1>
            <p>Rywalizacja trwa, dołącz do nas! </p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, eos ea. Rerum esse dolorem laborum porro reiciendis voluptas consequuntur dolores odit nemo. Asperiores iste inventore sequi temporibus ea! Magni, consectetur.</p>
          </article>
          <article class="artPopular">
            <h1>Popularni Wędkarze</h1>
            <div class="cardFisherman">
              <div class="foto">
                <img src="@/assets/logo.png" alt="" srcset="">
              </div>
              <div class="cardInfo">
                <h2>Marek</h2>
                <p>PZW CIECHANÓW</p>
              </div>
              <div class="numberWinner">
                <span>1</span>
              </div>
            </div>

            <div class="cardFisherman">
              <div class="foto">
                <img src="@/assets/logo.png" alt="" srcset="">
              </div>
              <div class="cardInfo">
                <h2>Artur</h2>
                <p>PZW CIECHANÓW</p>
              </div>
              <div class="numberWinner">
                <span>2</span>
              </div>
            </div>

            <div class="cardFisherman">
              <div class="foto">
                <img src="@/assets/logo.png" alt="" srcset="">
              </div>
              <div class="cardInfo">
                <h2>Arek</h2>
                <p>PZW CIECHANÓW</p>
              </div>
              <div class="numberWinner">
                <span>3</span>
              </div>
            </div>

            
          </article>
        </div>
    </section>
 
  
</template>

<script>
import Slider from '../components/Slider.vue'
export default {
  components: { Slider },
  name: 'Home',
  props: {
   
  }
}
</script>


<style lang="scss" scoped>
section.homeBox{
  width: 100%;
  height: auto;
  display: flex;
  justify-content:space-evenly;
  background-color: white;
  

  .leftBox{
    width: 60%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid black;
    
    h1{
      margin: 30px;
    }

    img{
      width: 100%;
    }
    p{
      padding: 5px;
    }
  }
  .rightBox{
    width: 30%;
    height: auto;
    display: flex;
    flex-direction: column;

    
    
    article.artHome{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 100%;
      height: auto;
      background-color: black;
      color: white;
      img{
      width: 100%;
    }
      h1{
      padding: 5px;
    }
      p{
        padding: 5px;
      }

    }
    article.artPopular{
      width: 100%;
      height: auto;
      margin-top: 30px;
      display: flex;
      flex-direction: column;

      h1{
        background-color: black;
        color: white;
        padding: 20px;
      }
      .cardFisherman{
        width: 100%;
        height: auto;
        display: flex;
        border-bottom:1px solid rgba(0, 0, 0, 0.432);
        padding: 8px 16px;
        .foto{
          width: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          img{
            width: 50px;
            margin-right: 25px ;
          }

        }
        .cardInfo{
          width: 70%;
          height: auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;

          h2{
            margin: 5px;
          }

          p{
            margin: 5px;
          }
        
        }
        .numberWinner{
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            span{
              display: flex;
              justify-content: center;
              align-items: center;
              width: 50px;
              height: 50px;
              border: 2px solid black;
              border-radius: 50%;
            }
          }

      }
    }
  }
   
}
</style>>


