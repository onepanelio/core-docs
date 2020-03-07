import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Infrastruture and workflows as code, version controlled</>,
    imageUrl: 'img/workflow.png',
    description: (
      <>
        Workflows, environments and infrastruture are all managed and versioned as code.
      </>
    ),
  },
  {
    title: <>Modular architecture based on best practices</>,
    imageUrl: 'img/modularity.png',
    description: (
      <>
        Pre-built components you can use out of the box or easily bring your own components for specialed workflows.
      </>
    ),
  },
  {
    title: <>Powered by Kubernetes so you can deploy anywhere</>,
    imageUrl: 'img/k8s.png',
    description: (
      <>
        Powered by Kubernetes so you can deploy anywhere Kubernetes can run.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className="text--center">{title}</h3>
      <p className="text--center">{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/getting-started/installing')}>
              Get Started
            </Link>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg ml-1',
                styles.contribute,
              )}
              to={useBaseUrl('docs/getting-started/contributing')}>
              Contribute
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
