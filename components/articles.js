import styles from './articles.module.css'
import Link from 'next/link'

export default function Articles({articles}) {
    return <>
        <div className={styles.articlesList}>
            {articles.map((article, i) => (
                <div key={i} className={styles.articlesElement}>
                    <span className={styles.title}>
                        <Link href={article.link}>
                            <a>{article.name}</a>
                        </Link>
                        <span className={styles.category}>{article.category}</span>
                    </span>
                    <span className={styles.region}>{article.region}</span>
                    <span className={styles.date}>{article.date}</span>
                </div>
            ))}       
        </div>
    </>
}