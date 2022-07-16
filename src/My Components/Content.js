import React from 'react'
import Footer from './Footer';

function Content() {
  return (
  
<div class='wrapper'>


      <section class='one'>
        <div class="content p-3 mb-2 bg-black text-white">
        <p class="font-monospace text-center my-3"><b>Decarbonizing  Industries</b></p>
        <h5 class="font-monospace text-center my-3 h5">To take our world to net zero carbon Emission</h5>
        </div>
        <div className='bounce-icon'>
        <a href='#next' style={{color:"white"}}><i class="fa-solid fa-angle-down fa-bounce"></i>        
        </a></div>
      </section>


      <section id='next' class='two'>
        
      <div class="content p-3 mb-2 bg-black text-white">
        <p class="font-monospace text-center my-3 "><b>Net Zero Carbon Future For Multiple industries</b></p><br></br>
        <ul  className='ls nobullets'>
        <li class="font-monospace"><h5><i class="fa-solid fa-angle-right"></i>&nbsp;Power Plants(coal powered)</h5></li>
        <li class="font-monospace"><h5><i class="fa-solid fa-angle-right"></i>&nbsp;Steel Plants</h5></li>
        <li class="font-monospace"><h5><i class="fa-solid fa-angle-right"></i>&nbsp;Cement Plants</h5></li>
        <li class="font-monospace"><h5><i class="fa-solid fa-angle-right"></i>&nbsp;Ships</h5></li>
        <li class="font-monospace"><h5><i class="fa-solid fa-angle-right"></i>&nbsp;Heavy Duty Trucks</h5></li>
        <li class="font-monospace"><h5><i class="fa-solid fa-angle-right"></i>&nbsp;Others</h5></li>
        </ul>
        </div>
       
      </section>



      <section class='three'>
        <div class=" content p-3 mb-2 bg-black text-white rk">
        <p class="font-monospace text-center my-3 "><b>Benefits<br/>nOc v/s other methods</b></p><br></br>
        <ul  class="nobullets">
        <li class="font-monospace "><h5><i class="fa-solid fa-angle-right"></i>&nbsp;Efficient</h5></li>
        <li class="font-monospace"><h5><i class="fa-solid fa-angle-right"></i>&nbsp;Lower Cost</h5></li>
        <li class="font-monospace"><h5><i class="fa-solid fa-angle-right"></i>&nbsp;Works At Any Co2 Concentration</h5></li>
        <li class="font-monospace"><h5><i class="fa-solid fa-angle-right"></i>&nbsp;Small Size</h5></li>
        <li class="font-monospace"><h5><i class="fa-solid fa-angle-right"></i>&nbsp;Scalable</h5></li>
        </ul>
        <div className='bottom-button'>
        <div class="mt-1 bg-black text-white text-center  ls">

        <a href="https://forms.gle/ZW3JLKp13zVPcGd49"><button className="bg-black" class="button" >Contact Us</button></a>
             </div> </div></div>
      </section>

     
      <Footer/>
</div>




      

       )}
export default Content

