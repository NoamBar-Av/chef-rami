import Image from "next/image";

export default function About() {
	return (
		<section className="section-pad">
			<div className="site-shell grid gap-8 md:grid-cols-2 md:items-center">
				<div className="about-photo-wrap">
					<Image
						src="/gallery/chef-pics/chef-rami-gallery-02.webp"
						alt="שף רמי באירוע פרטי"
						width={1100}
						height={900}
						className="about-photo"
					/>
				</div>
				<div>
					<h2 className="section-title">מי אני</h2>
					<p className="section-text mt-4">
						אני שף רמי, שף פרטי לאירועים, ארוחות שף וחוויות קולינריות בהתאמה
						אישית. אני מאמין שאוכל טוב הוא לא רק מנה יפה – הוא רגע, אווירה
						וזיכרון.
					</p>
				</div>
			</div>
		</section>
	);
}
