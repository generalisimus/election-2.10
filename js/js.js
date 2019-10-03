//аудио для просмотра результатов

function soundClick() {
	var audio = new Audio(); // Создаём новый элемент Audio
  	audio.src = 'sound/click.mp3'; // Указываем путь к звуку "клика"
  	audio.autoplay = true;//запускаем
};

$(function() {
	$('.voice').hide();
	$(".result").prop("disabled", true);
	$('.btn_result').hide();
	$('.conteiner').click(function() {
		$('.btn_result').show(2000)
	});
	$('#dog').click(function() {
		$('.dog').append(' (ваш выбор)'),
		$('.animal').animate({'width': '350','height': '350'} ),
		$('#cat').hide(),
		$('#parrot').hide()
	});
	$('#cat').click(function() {
		$('.cat').append(' (ваш выбор)'),
		$('.animal').animate({'width': '350','height': '350'} ),
		$('#dog').hide(),
		$('#parrot').hide()
	});
	$('#parrot').click(function() {
		$('.parrot').append(' (ваш выбор)'),
		$('.animal').animate({'width': '350','height': '350'} )
		$('#cat').hide(),
		$('#dog').hide()
	});
			
});


// Функция формирующая POST-запрос	
function postRequest(voteAnimal) {
	// Создаем аудио-объект
	let audio = new Audio('sound/' + voteAnimal + '.mp3');
	audio.autoplay = true;
	// Создаём новый XMLHttpRequest-объект
	let xhr = new XMLHttpRequest();
	// Создаем новый URL-объект
	let urls = new URL('https://sf-pyw.mosyag.in/sse/vote/stats' + voteAnimal)
	// Открываем запрос
	xhr.open('POST', urls)
	// Отсылаем POST-запрос с "пустым телом"
	xhr.send();

	$("#dog").prop("disabled", true);
	$("#cat").prop("disabled", true);
	$("#parrot").prop("disabled", true);
	$('.voice').show();
	$(".result").prop("disabled", false);
}
