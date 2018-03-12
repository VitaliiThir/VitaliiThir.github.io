
$(document).ready(function() {


//	slide2id - плавная прокрутка по ссылкам внутри страницы
	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    highlightSelector:"nav a"
	});
    
    //MixItUp - фильтрация работ в портфолио
    $('#portfolio-projects').mixItUp();
    
    //Start Fancybox
    $(".fancybox").fancybox({
        
        helpers : {
            overlay: {
                locked: false
            }
        }
    })
    //End Fancybox
    
    //jQuery validate JS
    $("#contact-form").validate({
        rules: {
            name: { required: true },
            email: { required: true, email: true },
            message: { required: true },
//            scype: { required: true },
//            phone: { required: true }
            
        },
        
        messages: {
            name: "Пожалуйста, введите своё имя",
            email: {
                required: "Пожалуйста, введите свой email",
                email: "Email адрес должен быть в формате name@domain.com . Возможно вы ввели Email с ошибкой ."
            },
            message: "Пожалуйста, введите текст сообщения"
        },
        
            
        submitHandler: function(form){
            ajaxFormSubmit();
        }
        
    
    })
    
    
function ajaxFormSubmit(){
    var string = $("#contact-form").serialize(); // Сохраняем данные введенные в форму в строку. 

		// Формируем ajax запрос
		$.ajax({
			type: "POST", // Тип запроса - POST
			url: "php/mail.php", // Куда отправляем запрос
			data: string, // Какие даные отправляем, в данном случае отправляем переменную string
			
			// Функция если все прошло успешно
			success: function(html){
				$("#contact-form").slideUp(800);
				$('#answer').html(html);
			}
		});

		// Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
		return false; 
}
    

 });