import styles from "./page.module.scss";

export default function Day01() {
	return (
		<div className={`${styles.page}`}>
			<main className={`${styles.container}`}>
				<div className={`${styles.fontLarge}`}>DAYS</div>
				<div className={`${styles.fontSmall}`}>CSS CHALLENGE</div>
			</main>
		</div>
	);
}
