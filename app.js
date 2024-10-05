
var selectedBackground = "";  

function bg() {
    var modalContent = document.getElementsByClassName("modal-content")[0];
    var items = document.getElementsByClassName("dropdown-item");

    for (var i = 0; i < items.length; i++) {
        items[i].onclick = function(event) {
            event.preventDefault();
            selectedBackground = this.href;  
            modalContent.style.backgroundImage = "url(" + selectedBackground + ")";
            modalContent.style.backgroundSize = "cover";
            modalContent.style.backgroundPosition = "center";
        };
    }
}

function posted(event) {
    event.preventDefault();
    
    var heading = document.getElementById("heading");
    var title = document.getElementById("floatingInput");
    var titleValue = title.value;
    heading.textContent = titleValue;

    var para = document.getElementById("para");
    var text = document.getElementById("textArea");
    var textValue = text.value;
    para.textContent = textValue;
    
    title.value = "";  
    text.value = ""; 


    var postModal = document.getElementById("modalDisplayPost");
    postModal.style.backgroundImage = "url(" + selectedBackground + ")";
    postModal.style.backgroundSize = "cover";
    postModal.style.backgroundPosition = "center";

    if (titleValue && textValue) { 
        document.getElementById("deletePost").style.display = "inline";
        document.getElementById("editPost").style.display = "inline";
    }
}

function deletePost() {
    var heading = document.getElementById("heading");
    var para = document.getElementById("para");
    heading.textContent = " ";
    para.textContent = " ";
    
    document.getElementById("deletePost").style.display = "none";
    document.getElementById("editPost").style.display = "none";
}


function editPost(event) {
    var newTitle = prompt("Enter new title:", heading.textContent);
    var newText = prompt("Enter new description:", para.textContent);
    heading.textContent=newTitle
    para.textContent=newText
}
