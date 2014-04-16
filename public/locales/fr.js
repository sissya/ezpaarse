var ezLanguages = ezLanguages || {};

ezLanguages['fr'] = {
	// Social links
	"social+facebook":   "Suivez-nous sur Facebook",
	"social+twitter":    "Suivez-nous sur Twitter",
	"social+googleplus": "Suivez-nous sur Google+",
	"social+mail":       "Écrivez-nous à {{ mail }}",

	// login page
	"login+signin":                  "Connectez-vous",
	"login+signup":                  "Enregistrez-vous",
	"login+checking_users":          "Vérification des utilisateurs...",
	"login+install_successful":      "Installation réussie !",
	"login+set_admin_account":       "Enregistrez-vous dès à présent pour définir le compte administrateur.",
	"login+register_quick_and_easy": "Enregistrez-vous avant de pouvoir traiter vos logs, c'est simple et rapide.<br/>Vous pourrez ensuite suivre vos traitements et communiquer plus facilement avec l'équipe ezPAARSE.",
	"login+ezpaarse_is":             "ezPAARSE, c'est...",
	"login+ezpaarse_description":    "<p>Un <a href=\"{{ github }}\">logiciel libre</a> qui permet l’analyse, l’enrichissement et l’exploitation des logs d’accès aux ressources électroniques proposées par les <a href=\"{{ platforms }}\">plate-formes Web des éditeurs de littérature scientifique</a>. Il se présente sous la forme d'une application Web disposant d'un formulaire et d'une <a href=\"{{ api }}\">API</a> permettant l'ingestion manuelle et automatique des logs générées par les serveurs et proxy des établissements.</p>",
	"login+simple_tool":             "Un outil simple et efficace",
	"login+few_clic_enough":         "Quelques clics suffisent à l'installer et à analyser vos logs.",
	"login+responsive_team":         "Une équipe disponible et réactive",
	"login+problem_question":        "Un problème, une question, une suggestion ?",
	"login+interested":              "Ça nous intéresse !",
	"login+growing_community":       "Une communauté grandissante",
	"login+not_only_fr":             "Et pas seulement francophone !",
	"login+connecting":              "Connexion...",
	"login+error":           				 "Erreur",
	"login+identifier":           	 "Identifiant",
	"login+email":           	 			 "Adresse email",
	"login+password":        	 			 "Mot de passe",
	"login+confirm":        	 			 "Confirmez votre mot de passe",
	"login+rememberme":      	 			 "Se souvenir de moi",
	"login+cancel":         	 			 "Annuler",
	"login+submitting":         	 	 "Soumission...",

	// Slides on the login page
	"slider+raw_material":      "La matière première : vos logs.",
	"slider+use_this_way":      "Qui peuvent être exploitées de cette manière !",
	"slider+drag_drop":         "Glissez déposez vos fichiers de logs dans ezPAARSE pour les traiter",
	"slider+real_time_process": "Vos logs sont alors traitées en temps réel par ezPAARSE",
	"slider+progress":          "Vous êtes informés de l'état d'avancement du traîtement",
	"slider+click_to_dl":       "Il suffit de cliquer pour récupérer le résultat du traitement",
	"slider+many_informations": "Le résultat contient de nombreuses informations",
	"slider+many_platforms":    "De nombreuses plateformes d'éditeurs sont gérées par ezPAARSE",
	"slider+renders":           "Des renders LibreOffice et Excel sont disponibles pour une visualisation des résultats",
	"slider+render_example":    "Exemple de rendu LibreOffice : nombre de consultation par revue",

	// Layout
	"menu+admin":         "Administration",
	"menu+logout":        "Déconnexion",
	"menu+process_logs":  "Traitez vos logs",
	"menu+documentation": "Documentation",
	"footer+powered":     "Propulsé par <a href=\"{{ nodejs }}\" target=\"_blank\">Node.js</a> et <a href=\"{{ expressjs }}\" target=\"_blank\">Express 3</a>",

	// Form page
	"form+title": "Préparation du traitement",
	"form+description": "Indiquez ici les logs que vous désirez faire analyser par ezPAARSE. Vos logs nécessitent peut-être un paramétrage particulier pour qu'ezPAARSE les comprenne. Si nécessaire, <a ez-toggle-sidebar=\"{{ sidebarID }}\">contactez l'équipe ezPAARSE</a> pour une aide au paramétrage.",
	"form+settings": "Paramètres",
	"form+logfiles": "Fichiers de logs",
	"form+copy_paste": "Copier/coller de logs",
	"form+autosort": "tri automatique",
	"form+drop_files_here": "Déposez les fichiers ici",
	"form+click_to_add": "Cliquez pour ajouter",
	"form+filename": "Nom de fichier",
	"form+size": "Taille",
	"form+n_selected_files": "{{ number }} fichiers sélectionnés",
	"form+total_size": "{{ size | bytesToSize }} au total",
	"form+process_files": "Traiter les fichiers",
	"form+process_with_curl": "Traiter avec cURL",
	"form+paste_your_logs": "Copiez/collez vos lignes de log ici",
	"form+process_lines": "Traiter les lignes",
	"form+curl_instructions": "Copiez la commande ci-dessous pour exécuter la requête avec cURL en utilisant le paramétrage actuel du formulaire. Vous devrez peut-être modifier le chemin des fichiers ou ajouter des options telles que <code>--proxy</code> ou <code>--no-buffer</code>."
};