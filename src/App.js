import React,{useEffect} from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import './style.css';

 const RedQueenRace = () => {
  var playbackrateQueen = 1;
  var playbackratebackground = 0;

  const sceneryFrames = [
    { transform: 'translateX(100%)' },
    { transform: 'translateX(-100%)' }
];

  const sceneryTimingBackground = {
  duration: 36000,
  iterations: Infinity
};

  const sceneryTimingForeground = {
  duration: 12000,
  iterations: Infinity,
};
   
  const spriteFrames = [
  { transform: 'translateY(0)' },
  { transform: 'translateY(-100%)' }
];

const background1Movement = useWebAnimations({
  keyframes: sceneryFrames,
  timing: sceneryTimingBackground
})

const background2Movement = useWebAnimations({
  keyframes: sceneryFrames,
  timing: sceneryTimingBackground
})

const foreground1Movement = useWebAnimations({
  keyframes: sceneryFrames,
  timing: sceneryTimingForeground
})

const foreground2Movement = useWebAnimations({
  keyframes: sceneryFrames,
  timing: sceneryTimingForeground
})

const redQueen_alice = useWebAnimations({
  keyframes: spriteFrames,
        timing: {
            easing: 'steps(7, end)',
            direction: "reverse",
            duration: 600,
            playbackRate: 1,
            iterations: Infinity
        }
})

const adjustBackgroundPlayback = () => {
  if (playbackrateQueen < .8) {
     playbackratebackground = (playbackrateQueen / 2) * -1;
  } else if (playbackrateQueen > 1.2) {
    playbackratebackground = (playbackrateQueen/2);
  } else {
    playbackratebackground = 0;
  }   
  foreground1Movement.getAnimation().playbackRate = playbackratebackground
  foreground2Movement.getAnimation().playbackRate = playbackratebackground
  background1Movement.getAnimation().playbackRate = playbackratebackground
  background2Movement.getAnimation().playbackRate = playbackratebackground
}
  /* But you can speed them up by giving the screen a click or a tap. */
const goFaster = () => {
  playbackrateQueen *= 1.1;
  redQueen_alice.getAnimation().playbackRate = playbackrateQueen;
  adjustBackgroundPlayback();
}

useEffect(() => {

  foreground1Movement.getAnimation().currentTime = foreground1Movement.getAnimation().effect.getTiming().duration / 2;
  background1Movement.getAnimation().currentTime = background1Movement.getAnimation().effect.getTiming().duration / 2;

  setInterval( () => {
      if (redQueen_alice > .4) {
      redQueen_alice.getAnimation().playbackRate *= .9;   
      } 
      adjustBackgroundPlayback();
    }, 3000);

  document.addEventListener("click", goFaster);
  document.addEventListener("touchstart", goFaster);
})

  return(
    <div className="wrapper">
          <div className="sky"></div>
          <div className="earth">

            <div id="red-queen_and_alice">
              <img id="red-queen_and_alice_sprite"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
              srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x"
              alt="Alice and the Red Queen." 
              ref={redQueen_alice.ref}
              />
            </div>
          </div>
       
    
        <div className="scenery" id="foreground1">
          <img id="palm3"
           src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
           srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" 
           alt=" "
           ref={foreground1Movement.ref}
          />
        </div>
    
        <div className="scenery" id="foreground2">
        <img id="bush"
         src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" 
         srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" 
          alt=" "
          ref={foreground2Movement.ref} />
        </div>
    
        <div className="scenery" id="background1" ref={background1Movement.ref}>
        <img  id="w_rook_upright"
         src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" 
         srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" 
         alt=" " />
    
        <img id="r_pawn_upright" 
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"
        srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" 
        alt=" " />
    
        <img id="w_rook"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png"
        srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x"
        alt=" " />
    
        <img id="palm1"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png"
        srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" 
        alt=" " />
        </div>
          
        <div className="scenery" id="background2" ref={background2Movement.ref}>
          <img id="r_pawn"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" 
          alt=" " />
    
          <img id="r_knight"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x"
          alt=" "/>
    
          <img id="palm2"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" 
          alt=" "/>
          </div>
        </div>
      );
      }

export default RedQueenRace;