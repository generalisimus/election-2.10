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


function postRequest(voteAnimal) {
	let audio = new Audio('sound/' + voteAnimal + '.mp3');
	audio.autoplay = true;

}	
const url_c = new URL("https://sf-pyw.mosyag.in/sse/vote/cats")
const url_d = new URL("https://sf-pyw.mosyag.in/sse/vote/dogs")
const url_p = new URL("https://sf-pyw.mosyag.in/sse/vote/parrots")
$(document).ready(init);

function init(){
	$('#cat').click(function() {
		vote("cats")});
	$('#dog').click(function() {
		vote("dogs")});
	$('#parrot').click(function() {
		vote("parrots")});
}

function vote(pet) {
	console.log(pet);
	pet == "cats" ? $.post(url_c, function(data, status){console.log(data, status, 'success with cats')}) :
	pet == "dogs" ? $.post(url_d, function(data, status){console.log(data, status, 'success with dogs')}) :
	pet == "parrots" ? $.post(url_p, function(data, status){console.log(data, status, 'success with parrots')}) : null;
	
}
