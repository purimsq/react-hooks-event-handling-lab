// Code EyesOnMe Component Here
function EyesOnMe() {
    function handleFocus() {
      console.log("Good!");
    }; 
  
    function handleBlur() {
      console.log("Hey! Eyes on me!");
    }; 
  
    return (
      <div className="eyes-on-me">
        <div>
          <button onFocus={handleFocus} onBlur={handleBlur} >Eyes on me</button>
        </div>
      </div>
    );
  };
  
  export default EyesOnMe;