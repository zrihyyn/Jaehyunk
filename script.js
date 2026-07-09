const projects = [
    { image: "images/project5.JPG", caption: "<em>Reframing Women</em>, 192 papes, 200 × 280 mm" },
    { image: "images/project6.jpg", caption: "<em>Reframing Women</em>, 192 papes, 200 × 280 mm" },
    { image: "images/dsc04277.jpg", caption: "<em>Reframing Women</em>, 192 papes, 200 × 280 mm" },
    { image: "images/project1.jpg", caption: "<em>Women–Poetry–Translation: Rewriting Feminist Voices across Text and Archive</em>, 35 pages, 120 × 190 mm" },
    { image: "images/project2.jpg", caption: "<em>Women–Poetry–Translation: Rewriting Feminist Voices across Text and Archive</em>, 35 pages, 120 × 190 mm" },
    { image: "images/project3.jpg", caption: "<em>Women–Poetry–Translation: Rewriting Feminist Voices across Text and Archive</em>, 35 pages, 120 × 190 mm" },
    { image: "images/project4.jpg", caption: "<em>Women–Poetry–Translation: Rewriting Feminist Voices across Text and Archive</em>, 35 pages, 120 × 190 mm" },
    { image: "images/phone.png", caption: "" },
    { image: "images/project7.jpg", caption: "<em>Reframing Women</em>, 192 papes, 200 × 280 mm" },
    { image: "images/project9.jpg", caption: "House for a Projector" },
    { image: "images/project10.jpg", caption: "<em>Reframing Women</em>, 192 papes, 200 × 280 mm" },
    { image: "images/phonetom.png", caption: "" },
    { image: "images/project11.jpg", caption: "Screening of <em>Reframing Women</em>" },
    { video: "images/short.mp4", caption: '<em>Reframing Women</em>, single-channel video, 13′15″ · <a href="https://vimeo.com/jhkim/reframing-women?share=copy&fl=sv&fe=ci" target="_blank">Vimeo</a>' },
    { image: "images/project13.png", caption: "<em>Possible Loving Tending—Carol Seajay</em>, 98 pages, 200 × 210 mm" },
    { image: "images/project14.png", caption: "<em>Possible Loving Tending—Carol Seajay</em>, 98 pages, 200 × 210 mm" },
    { image: "images/project15.png", caption: "<em>Possible Loving Tending—Carol Seajay</em> (index), 18 pages, 400 × 260 mm" },
    { image: "images/project16.png", caption: "<em>Possible Loving Tending—Carol Seajay</em>, 98 pages, 200 × 210 mm" },
    { image: "images/project17.png", caption: "<em>Possible Loving Tending—Carol Seajay</em>, 98 pages, 200 × 210 mm" },
    { image: "images/project18.png", caption: "<em>Possible Loving Tending—Carol Seajay</em> (index), 18 pages, 400 × 260 mm" },
    { image: "images/project19.jpg", caption: "<em>Deep Spring Karaoke</em>, One-day event at Maison Felix Salut, Amsterdam, Saturday, 22 November 2025" },
    { image: "images/project20.jpg", caption: "Gradient Curtain for <em>Deep Spring Karaoke</em>" },
    { image: "images/project21.jpg", caption: "<em>Deep Spring Karaoke</em>, Amsterdam, Saturday, 22 November 2025" },
    { image: "images/project22.jpg", caption: "<em>Deep Spring Karaoke</em>, Amsterdam, Saturday, 22 November 2025" },
    { image: "images/flyer1.jpg", caption: "Flyer for <em>Deep Spring Karaoke</em>, 210 × 297 mm, printed by <em>no kiss</em>" },
    { image: "images/flyer2.jpg", caption: "Flyer for <em>Deep Spring Karaoke</em>, 210 × 297 mm, printed by <em>no kiss</em>" },
    { image: "images/jamie 6.png", caption: "" },
    { image: "images/poster-red1.jpg", caption: "Poster design for <em>Curve of the Red Wall</em>, Korea National University of Arts, School of Visual Arts, 297 × 420mm" },
    { image: "images/poster-red5.jpg", caption: "Poster design for <em>Curve of the Red Wall</em>, Korea National University of Arts, School of Visual Arts, 297 × 420mm" },
    { image: "images/tom.png", caption: "" },
    { image: "images/pareidolia.jpeg", caption: "<em>Pareidolia</em>, 594 × 420 mm, with Sungbo Hong" },
    { image: "images/poster.png", caption: "<em>Notes on Friendship</em>, 594 × 420 mm, with Malva Askerup" },
    { image: "images/jh 6.png", caption: "<em>Rapture: Self-Portraiture, Unconscious, and Self-Exploration</em> by Anselme Alma Servain, 135 pages, 110 × 190 mm" },
    { image: "images/jh 12.png", caption: "<em>Rapture: Self-Portraiture, Unconscious, and Self-Exploration</em> by Anselme Alma Servain, 135 pages, 110 × 190 mm" },
    { image: "images/jh 9.png", caption: "<em>Rapture: Self-Portraiture, Unconscious, and Self-Exploration</em> by Anselme Alma Servain, 135 pages, 110 × 190 mm" },
    { image: "images/jh 13.png", caption: "<em>Rapture: Self-Portraiture, Unconscious, and Self-Exploration</em> by Anselme Alma Servain, 135 pages, 110 × 190 mm" },
    { image: "images/np.jpg", caption: "Korean typesetting for KABK School Newspaper, Issue 3: <em>Pitch</em>" },
    { image: "images/np2.jpg", caption: "Korean typesetting for KABK School Newspaper, Issue 3: <em>Pitch</em>" },
    { image: "images/poster 2.png", caption: "Poster for <em>Possible Loving Tending: Transcribing Women in Print</em>, 297 × 420 mm, with Stanisław Zieliński" },
    { image: "images/poet1.png", caption: "<em>Hey Poet</em>, 210 × 297 mm, with Jasper Naus, Zoë Ng Gschmaiss, and Stanisław Zieliński" },
    { image: "images/poet2.png", caption: "<em>Hey Poet</em>, 210 × 297 mm, with Jasper Naus, Zoë Ng Gschmaiss, and Stanisław Zieliński" },
    { image: "images/poet3.png", caption: "<em>Hey Poet</em>, 210 × 297 mm, with Jasper Naus, Zoë Ng Gschmaiss, and Stanisław Zieliński" },
    { image: "images/shsh.png", caption: "" },
    { image: "images/14.png", caption: "<em>Unseen Narratives</em>, 36 pages, 120 × 190 mm" },
    { image: "images/19.png", caption: "<em>Unseen Narratives</em>, 36 pages, 120 × 190 mm" },
    { image: "images/1.png", caption: "<em>Unseen Narratives</em>, 36 pages, 120 × 190 mm" },
    { image: "images/5.png", caption: "<em>Unseen Narratives</em>, 36 pages, 120 × 190 mm" },
    { image: "images/18.png", caption: "<em>Unseen Narratives</em>, 36 pages, 120 × 190 mm" },
    { image: "images/tnj.jpeg", caption: "" },
    { image: "images/rl11.png", caption: "<em>Revolutionary Letters</em> #11 by Diane di Prima" },
    { image: "images/rl9-3.png", caption: "<em>Revolutionary Letters</em> #9 by Diane di Prima" },
    { image: "images/jamie 5.png", caption: "" },
    { image: "images/rl29.png", caption: "<em>Revolutionary Letters</em> #29 by Diane di Prima" },
    { image: "images/1 3.png", caption: "<em>Ideal Family</em>" },
    { image: "images/scan 14.png", caption: "<em>Ideal Family</em>" },
    { image: "images/1 2.png", caption: "<em>Ideal Family</em>" },
    { image: "images/scan 12.png", caption: "<em>Ideal Family</em>" },
    { video: "images/short2.mp4", caption: '<em>Reframing Women</em>, single-channel video, 13′15″ · <a href="https://vimeo.com/jhkim/reframing-women?share=copy&fl=sv&fe=ci" target="_blank">Vimeo</a>' },
    { image: "images/1 19.png", caption: "<em>Archiving + Measuring</em>" },
    { image: "images/1 14.png", caption: "<em>Archiving + Measuring</em>" },
    { image: "images/1 10.png", caption: "<em>Archiving + Measuring</em>" },
    { image: "images/red4.png", caption: "<em>Archiving + Measuring</em>" },
    { image: "images/web 2.png", caption: "<em>What Makes Our Childhood</em>, Responsive, 1440 px width (MacBook screen reference)" },
    { image: "images/web2 2.png", caption: "<em>What Makes Our Childhood</em>, Responsive, 1440 px width (MacBook screen reference)" },
    { video: "images/short3.mp4", caption: '<em>Reframing Women</em>, single-channel video, 13′15″ · <a href="https://vimeo.com/jhkim/reframing-women?share=copy&fl=sv&fe=ci" target="_blank">Vimeo</a>' },
    { image: "images/tool.jpg", caption: "<em>Tool for Writing</em>" },
    { image: "images/scan.png", caption: "<em>Tool for Writing</em>" },
    { image: "images/ruler.png", caption: "<em>Tool for Writing</em>" },
    { image: "images/using-ivo.jpeg", caption: "People using <em>Tool for Writing</em>" },
    { image: "images/IMG_9275.jpeg", caption: "People using <em>Tool for Writing</em>" },
    { image: "images/IMG_9272.jpeg", caption: "People using <em>Tool for Writing</em>" },
    { video: "images/poster.mp4",caption: '<a href="https://www.tomnjamie.com/" target="_blank">tomnjamie.com</a>' },
    { image: "images/DSC04195.jpg", caption: "<em>Reframing Women</em>, 192 papes, 200 × 280 mm" },
    { image: "images/img_3822.jpg", caption: "" },
    { image: "images/dsc04116.jpg", caption: "Stools" },














];
  
  let current = 0;
  
  const gallery = document.querySelector(".gallery");
  const img = document.querySelector(".gallery img");
  const video = document.querySelector(".gallery video");
  const caption = document.querySelector(".gallery figcaption");
  
  function render() {
    const project = projects[current];
  
    caption.innerHTML = project.caption;
  
    if (project.image) {
      video.pause();
      video.removeAttribute("src");
      video.load();
      video.style.display = "none";
  
      img.src = project.image;
      img.style.display = "block";
    }
  
    if (project.video) {
      img.style.display = "none";
      img.removeAttribute("src");
  
      video.src = project.video;
      video.style.display = "block";
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.play();
    }
  }
  
  render();
  
  gallery.addEventListener("click", (e) => {
    const rect = gallery.getBoundingClientRect();
  
    if (e.clientX > rect.left + rect.width / 2) {
      current = (current + 1) % projects.length;
    } else {
      current = (current - 1 + projects.length) % projects.length;
    }
  
    render();
  });