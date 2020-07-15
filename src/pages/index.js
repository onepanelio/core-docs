import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Image and video annotation with automatic pre-annotation</>,
    imageUrl: 'img/workflow.png',
    description: (
      <>
        Annotate images and video using <a href="https://github.com/opencv/cvat" target="_blank">CVAT</a>, with object tracking and semi-automatic annotation of bounding boxes and polygon masks.
      </>
    ),
  },
  {
    title: <>Build your models with GPU optimized frameworks and IDEs</>,
    imageUrl: 'img/workflow.png',
    description: (
      <>
        Workspaces that upgrade or downgrade to and from GPUs machines, preloaded with PyTorch, TensorFlow, JupyterLab, VSCode and <a href="https://github.com/onepanelio/templates/tree/master/workspaces" target="_blank">more</a>. 
      </>
    ),
  },
  {
    title: <>Create pipelines as code for model training and data processing</>,
    imageUrl: 'img/workflow.png',
    description: (
      <>
        Build reproducible training and data processing pipelines that can perform parallel or distributed tasks on multiple machines.
      </>
    ),
  },
  {
    title: <>Track experiments and visualize model metrics</>,
    imageUrl: 'img/workflow.png',
    description: (
      <>
        Track and visualize model metrics and expriments with TensorBoard and ModelDB, or bring your own experiment tracking tools.
      </>
    ),
  },
  {
    title: <>Infrastructure and workflows as code with version control</>,
    imageUrl: 'img/workflow.png',
    description: (
      <>
        Workflows, environments and infrastructure are all managed and versioned as code.
      </>
    ),
  },
  {
    title: <>Modular architecture based on best practices</>,
    imageUrl: 'img/modularity.png',
    description: (
      <>
        Components you can use out of the box or easily bring your own specialized components.
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
  }
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
      title="Onepanel"
      description="Unified platform for production vision AI; offering solutions for development, labeling, training, pipelines and serverless deployments on an open and extensible infrastrucure.">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__name">Onepanel</h1>
          <h2 className="hero__title">{siteConfig.title}</h2>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--primary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/getting-started/quickstart')}>
              GET STARTED
            </Link>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg ml-1',
                styles.contribute,
              )}
              to={useBaseUrl('docs/getting-started/contributing')}>
              CONTRIBUTE
            </Link>
          </div>
          {/* <div className="hero__video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/nyWOiT22m38" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div> */}
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
