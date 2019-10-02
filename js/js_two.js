const header = new Headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
})
// Создаем объект-ссылка
const url = new URL('https://sf-pyw.mosyag.in/sse/vote/stats')
// Создаем объект-событие
const ES = new EventSource(url, header)
// Реакция на ошибку сервера
ES.onerror = error => {
    ES.readyState ? $('.container').html("<h2>Server Error</h2>") : null;
}
// Считываем данные с сервера
ES.onmessage = message => {
	voteData = JSON.parse(message.data)
	procDogs =  (voteData.dogs * 100 / (voteData.dogs + voteData.cats + voteData.parrots)).toFixed();
	procCats =  (voteData.cats * 100 / (voteData.dogs + voteData.cats + voteData.parrots)).toFixed();
	procPars =  (voteData.parrots * 100 / (voteData.dogs + voteData.cats + voteData.parrots)).toFixed();

	if (procPars > procDogs  && procPars > procCats) {
		$('#dog, #cat, #dog-prog, #cat-prog').fadeOut(5000)
		$('#parrot').animate({'width': '350','height': '350'}, 8000)
		$('.header').text("Наш победитель!!!")
		$('.header_two').text("С результатом " + procPars + "% голосов" )
	}

	if (procPars < procDogs  && procDogs > procCats) {
		$('#parrot, #cat, #parrot-prog, #cat-prog').fadeOut(5000)
		$('#dog').animate({'width': '350','height': '350'}, 8000)
		$('.header').text("Наш победитель!!!")
		$('.header_two').text("С результатом " + procDogs + "% голосов" )
	}

	if (procCats > procDogs  && procPars < procCats) {
		$('#dog, #parrot, #dog-prog, #parrot-prog').fadeOut(5000)
		$('#cat').animate({'width': '350','height': '350'}, 8000)
		$('.header').text("Наш победитель!!!")
		$('.header_two').text("С результатом " + procCats + "% голосов" )
	}
	// Вносим считанные данные в прогресс-бары
	$("#prog-dog").width(String(procDogs) + "%").text(voteData.dogs + ' (' + procDogs + '%' +')');
	$("#prog-cat").width(String(procCats) + "%").text(voteData.cats + ' (' + procCats + '%' +')');
	$("#prog-parrot").width(String(procPars) + "%").text(voteData.parrots + ' (' + procPars + '%' +')');
}
