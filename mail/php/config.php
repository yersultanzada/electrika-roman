<?
	// *** Настройка обязательности полей, в случае если они присутствуют в вашей форме

	// Имя
	const NAMEISREQUIRED = true;
	const MSGSNAMEERROR = "⚠ Поле обязательно для заполнения";

	// Телефон
	const TELISREQUIRED = true;
	const MSGSTELERROR = "⚠ Поле обязательно для заполнения";

	// Сообщение об успешной отправке
	const MSGSSUCCESS = "Сообщение успешно отправлено";

	// *** SMTP *** //

		require_once($_SERVER['DOCUMENT_ROOT'] . '/mail/phpmailer/smtp.php');
		const HOST = 'smtp.gmail.com';
		const LOGIN = 'webtech19studio@gmail.com';
		const PASS = 'web_tech2121';
		const PORT = '465';

	// *** /SMTP *** //

  // Почта с которой будет приходить письмо
	const SENDER = 'webtech19studio@gmail.com';
	
	// Почта на которую будет приходить письмо
	const CATCHER = 'e.kizmeter@yandex.kz';
	
	// Тема письма
	const SUBJECT = 'Заполнена форма обратной связи';
	
	// Кодировка
  const CHARSET = 'UTF-8';
