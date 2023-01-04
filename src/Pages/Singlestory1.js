import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import StoriesApi from '../Api/StoriesApi'

const Singlestory1 = () => {
  return (
    <>
    <Navbar />
    <section className='single-section'>
      <div className='row'>
          <div className='col-12 col-lg-6 '>
          <h1 className='single-headingone'>{StoriesApi[1].title}</h1>
          <p className='single-paraone'>{StoriesApi[1].info}</p>
          </div>

          <div className='col-12 col-lg-6 justify-content-center '>
              <div className='row'>
              <div className='col-11 col-lg-6'>
              <img src={StoriesApi[1].img} alt="photos" className='single-imgone' />
              </div>
              </div>
          </div>    

      </div>  
      </section>
       
      <section className='single-sectiontwo'> 
      <div className='single-container'>
        <p className='single-para'>These motivational stories prove that with a little hard work, any amount of business success is possible.</p>
        <h1 className='single-heading'>Colonel Sanders – Kentucky Fried Chicken</h1>
        <p className='single-para'>Once, there was an older man, who was broke, living in a tiny house and owned a beat-up car. He was living off of $99 social security checks. At 65 years of age, he decide things had to change. So he thought about what he had to offer. His friends raved about his chicken recipe. He decided that this was his best shot at making a change.
        <br/>
        The old man left Kentucky and traveled to different states to try to sell his recipe. He told restaurant owners that he had a mouthwatering chicken recipe. He offered the recipe to them for free, just asking for a small percentage of the items sold. Sounds like a good deal, right?
      </p>
        <h1 className='single-heading'>The Obstacle in our Path – Thanh Min</h1>
        <p className='single-para res-h'>This Short Story was written by Thanh Min. There once was a very wealthy and curious king. This king had a huge boulder placed in the middle of a road. Then he hid nearby to see if anyone would try to remove the gigantic rock from the road.</p>
        <img src="../images/44.jpg" alt="hh" className='single-img' />
        <p className='single-para res-h'>Finally, a peasant came along. His arms were full of vegetables. When he got near the boulder, rather than simply walking around it as the others had, the peasant put down his load and tried to move the stone to the side of the road. It took a lot of effort but he finally succeeded.</p>

      </div>  

      </section>
   
      <Footer />
    </>  
  )
}

export default Singlestory1