// Code Keypad Component Here

function Keypad() {
    function handleChange() {
      console.log("Entering password...");
    };
  
    return (
        <div className="keypad">
            <div className="input">
                <input type="password" onChange={handleChange} />
            </div>
      </div>
    );
  };
  
  export default Keypad;