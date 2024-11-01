import styles from "./page.module.scss";

export default function Day01() {
	return (
		<div className={`${styles.page}`}>
			<main className={`${styles.container}`}>
				<div className={`${styles.number}`}>
					<div className={`${styles.firstOne}`}></div>
					<div className={`${styles.secondOne}`}></div>
					<div className={`${styles.firstZero}`}></div>
					<div className={`${styles.secondZero}`}></div>
				</div>
				<div className={`${styles.fontLarge}`}>DAYS</div>
				<div className={`${styles.fontSmall}`}>CSS CHALLENGE</div>
			</main>
		</div>
	);
}
