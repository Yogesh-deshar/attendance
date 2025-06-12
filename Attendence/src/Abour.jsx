import React from "react";
import Navbar from "./Navbar";

function Abour() {
  return (
    <>
     

      <div className="container d-flex">
        <div className="word" style={{width:"600px"}}>
          <h2 >About us</h2>

          <div className="subtitle mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            eos voluptate, quidem aut, quis earum ducimus minus, explicabo ipsum
            labore itaque delectus ratione expedita incidunt eveniet dolorem
            officiis ad temporibus. Fugit, suscipit error? Fugiat eaque repellat
            molestias ipsam unde nisi debitis, aspernatur sit aperiam, optio
            maxime officia facilis porro incidunt nulla dolores, libero rem
            soluta! Iusto sunt quam ducimus harum! Odio, ducimus fugit saepe et
            ipsam quas quam quis facilis eos mollitia eius in! Quos amet quam
            sint officiis impedit repudiandae animi! Adipisci libero consectetur
            iure exercitationem laudantium cupiditate amet. Neque quia quo
            ratione quam facilis.
          </div>
        </div>

        <div className="image" style={{ width: "400px", aspectRatio:2/1 }}>
          <img
            src="https://media.istockphoto.com/id/1167651240/vector/attendance-concept-businessman-holding-document-vector-flat-design-man-hold-document.jpg?s=612x612&w=0&k=20&c=DHr2ZaBkHuSkcZOcrt3djH3N0SdlRZS74gtbzQzPLT0="
            alt="image"
          />
        </div>
      </div>
    </>
  );
}

export default Abour;
