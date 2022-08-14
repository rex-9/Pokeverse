const about = () => {
  const aboutPage = document.getElementById('about');
  const child = document.createElement('div');
  child.innerHTML = `<div id="bio"><h1>Present to you by Rex!</h1><br>The friendly spiritual developer, who loves mindfulness, has a passion for
    contributing to the mindful communities.<br><br>The projects I've built are beautifully displayed in my <a href="https://htetnaing0814.github.io/Portfolio/">portfolio</a>
    .<br><br>Anyone can kindly find my resume <a href="https://docs.google.com/document/d/1DgeSJuHl44cCu-xupH8gZ3ZD3rpcuY4I9R118GC0a8Q"> here</a>.</div>
  <div id="footer">
    <div style="padding-top: 9px;"><a href="https://github.com/HtetNaing0814"><i
          class="fa-brands fa-github fa-2x"></i></a></div>
    <div style="padding-top: 9px;"><a href="https://www.linkedin.com/in/htetnaing0814/"><i
          class="fa-brands fa-linkedin fa-2x"></i></a></div>
    <div class="whatsmail"><i class="fa-brands fa-whatsapp fa-2x"></i>
      <p>: +959443112251</p>
    </div>
    <div class="whatsmail"><i class="fa-solid fa-envelope fa-2x"></i>
      <p>: htetnaing0814@gmail.com</p>
    </div>
  </div>`;
  aboutPage.appendChild(child);
};

export default about;