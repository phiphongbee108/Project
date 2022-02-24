$(function() {
    loadData();
});

function loadData() {
    $.ajax({
        url: "https://gnews.io/api/v4/search?q=example&token=98d0341192e4a20a1fcd2c6f3fca1f92&lang=en", 
        type: "GET", 
        success:function(rs) {
            $(".search").click(function() {
                let tuKhoa = $(".nhap").val();
                console.log(tuKhoa);
                fetch('https://gnews.io/api/v4/search?q=' +tuKhoa+ '&token=98d0341192e4a20a1fcd2c6f3fca1f92')
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        console.log(data);
                        var infor = data.articles;
                        var table = document.getElementById("new");
                        table.innerHTML = "";
                        
                        for (i = 0; i < infor.length; i++) {
                            let obj = infor[i];
                            // console.log(obj);
                            let row = table.insertRow();
                            
                            row.className = "newRow";

                            let cell1 = row.insertCell(0);
                            let cell2 = row.insertCell(1);

                            cell1.innerHTML = "<img src='"+obj.image+"' class='img'>";
                            cell2.innerHTML = "<p><a href='"+obj.url+"' class='title' target='blank'></a></p><p><i class='date'></i></p><p class='content'></p>"
                            
                            $(".title")[i].innerHTML = obj.title;
                            $(".date")[i].innerHTML = obj.publishedAt;
                            $(".content")[i].innerHTML = obj.content;        
                        }
                    });
            });

            var infor = rs.articles;
            var table = document.getElementById("new");
            
            for (i = 0; i < infor.length; i++) {
                let obj = infor[i];
                // console.log(obj);
                let row = table.insertRow();
                
                row.className = "newRow";

                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);

                cell1.innerHTML = "<img src='"+obj.image+"' class='img'>";
                cell2.innerHTML = "<p><a href='"+obj.url+"' class='title' target='blank'></a></p><p><i class='date'></i></p><p class='content'></p>"
                
                $(".title")[i].innerHTML = obj.title;
                $(".date")[i].innerHTML = obj.publishedAt;
                $(".content")[i].innerHTML = obj.content;        
            }
        }
    })
}

