const submit = document.querySelector("#submit_button");






//Functions

function bookmark_submition(){

     location.reload(); //reloads the page and display ney entry

	var site_name = document.querySelector("#site_name").value;

	var site_url = document.querySelector("#site_url").value;

	var bookmark = {

		name : site_name,
		url : site_url
	}

	document.querySelector("#site_name").value=null;
	document.querySelector("#site_url").value=null;

     // Local storage

if(localStorage.getItem('bookmarks') === null){

// set array
 var bookmarks = [];

 bookmarks.push(bookmark);

localStorage.setItem('bookmarks', JSON.stringify(bookmarks));



}else{

	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
	bookmarks.push(bookmark);
	localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

                                                                                 //localStorage.clear('bookmarks');
 
}


}

function fetchBookmarks(){



var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));



for (var i = 0; i < bookmarks.length; i++){

		let ii = i;

    var bookmarksResult = document.querySelector('.list_container');
	var bookmarks_li = document.createElement("li");

	var result = bookmarks[i];
	var bookmarkName = result.name;
	var bookmarkUrl = result.url;

	var bookmarks_li_p = document.createElement("p");
	bookmarks_li_p.innerText = bookmarkName;

	var buttonVisit = document.createElement("button");
	buttonVisit.classList.add("visit_button");
	buttonVisit.innerText = "Visit";

	buttonVisit.addEventListener("click", visitUrl);



	var buttonDelete = document.createElement("button");
	buttonDelete.classList.add("delete_button");
	buttonDelete.innerText = "Delete";

	buttonDelete.addEventListener("click", function(){


     
		deleteBookmark(ii);



	});


	bookmarks_li.appendChild(bookmarks_li_p);
	bookmarks_li.appendChild(buttonDelete);
	bookmarks_li.appendChild(buttonVisit);	
	bookmarksResult.appendChild(bookmarks_li);

	


	function visitUrl(){

		window.open(bookmarkUrl);
	}




}


}

	

	function deleteBookmark(name){

         location.reload();
		if (confirm("Are you sure you want to delete this item?!")){

		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

		for (var i = 0; i < bookmarks.length; i++){



			var result = bookmarks[i];
			var bookmarkName = result.name;
			var bookmarkUrl = result.url;

              if( i == name){


                bookmarks.splice(i, 1);

              }
				
	
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
		
		}
     }else{

     	return;
     }

	}

//Event Listeners

submit.addEventListener("click", bookmark_submition);


