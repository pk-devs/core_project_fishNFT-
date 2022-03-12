// The minter is the representation of the minter contract in main.mo but in JavaScript
import { minter } from "../../declarations/minter";

// This is library to use with principal that is provided by Dfinity
import { Principal } from "@dfinity/principal";
import { Actor } from "@dfinity/agent";

import {StoicIdentity} from "ic-stoic-identity";
/* import { PrincipalClass } from "@dfinity/candid/lib/cjs/idl"; */

// Log in with Stoic 

const button_sign_in_stoic = document.getElementById("button_sign_in_stoic");
button_sign_in_stoic.addEventListener("click", async () => {

StoicIdentity.load().then(async identity => {
  if (identity !== false) {
    //ID is a already connected wallet!
  } else {
    //No existing connection, lets make one!
    identity = await StoicIdentity.connect();
  }
  
  //Lets display the connected principal!
  console.log(identity.getPrincipal().toText());
  
  //Create an actor canister
  const actor = Actor.createActor(idlFactory, {
    agent: new HttpAgent({
      identity,
    }),
    canisterId,
  });
  
  //Disconnect after
  StoicIdentity.disconnect();

  });
});


// For beginners : This is really basic Javascript code that add an event to the "Mint" button so that the mint_nft function is called when the button is clicked.
const mint_button = document.getElementById("mint");
mint_button.addEventListener("click", mint_nft);

async function mint_nft() {
  // Get the url of the image from the input field
  const name = document.getElementById("name").value.toString();
  console.log("The url we are trying to mint is " + name);

  // Get the principal from the input field.
  const principal_string = document.getElementById("principal").value.toString();
  const principal = Principal.fromText(principal_string);

  // Mint the image by calling the mint_principal function of the minter.
  const mintId = await minter.mint_principal(name, principal);
  console.log("The id is " + Number(mintId));
  // Get the id of the minted image.

  // Get the url by asking the minter contract.
  document.getElementById("nft").src = await minter.tokenURI(mintId);

  // Show some information about the minted image.
  document.getElementById("greeting").innerText = "this nft owner is " + principal_string + "\nthis token id is " + Number(mintId);
}

// My code 

// Autofill tokenURI 

/*
const click_fish1 = document.getElementById("nft");
  click_fish1.addEventListener("click", autoFill); 

function autoFill() {
  var c = 
}
*/



// Autofill principal 

const owner_button = document.getElementById("principal");
  owner_button.addEventListener("click", autoFill);

 function autoFill() {
document.getPrincipal

   var x = "Principal";
  // find out how I pass this to the label field in my .html, check discussion on Github.
  return("x");

}


// onClick event for sign in button with II 
/*
const sign_in_ii_button = document.getElementById("sign-in-ii");
  sign_in_ii_button.addEventListener("click", sign_in_ii);

async function sign_in_ii () {
  Button.onclick = function(){ 
  Bind this to log in to II 
  };
}
*/


// Show principal 
 // document.getElementById("your_principal").innerText = "Your principal is " + principal_string;


