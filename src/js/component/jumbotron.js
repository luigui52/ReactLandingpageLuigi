import React from "react";

export function Jumbotron() {
	return (
		<div className="jumbotron m-5">
			<h1 className="display-4">
				Bienvenidos a la página de Luigi Hidalgo
			</h1>
			<p className="lead">
				Diviertete mientras aprendes a programar, buena actitud🕺,
				perseverancia💪 y café☕ es todo lo que necesitas.
			</p>
			<p>
				Puedes ingresar a los cursos de forma sencilla dandole a click a
				la imagen del curso que te interesa.
			</p>
			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Quiero saber más
				</a>
			</p>
		</div>
	);
}
