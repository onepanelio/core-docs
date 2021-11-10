import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Prepare <img className="features__arrow-1" src="img/landing/arrow.svg"></img></>,
    imageUrl: 'img/landing/prepare.svg',
    description: (
      <>
        <ul>
          <li>
            <h4>Computer Vision Annotation Tool</h4>
            Fully integrated image and video annotation
          </li>
          <li>
            <h4>Automatic annotation</h4>
            Automatic annotation for semantic segmentation and object detection
          </li>
          <li>
            <h4>Data augmentation and processing</h4>
            Extensible data pre-processing pipelines
          </li>
        </ul>
      </>
    ),
  },
  {
    title: <>Build <img className="features__arrow-2" src="img/landing/arrow.svg"></img></>,
    imageUrl: 'img/landing/build.svg',
    description: (
      <>
        <ul>
          <li>
            <h4>JupyterLab and VS Code Workspaces</h4>
            Elastic JupyterLab and VS Code with TensorFlow, PyTorch and GPU support
          </li>
          <li>
            <h4>Built-in algorithms</h4>
            Built-in algorithms for object detection and semantic segmentation
          </li>
          <li>
            <h4>Bring your own algorithms and tools</h4>
            Flexible template and plugin system to bring your own algorithms or tools
          </li>
        </ul>
      </>
    ),
  },
  {
    title: <>Train and Tune <img className="features__arrow-3" src="img/landing/arrow.svg"></img></>,
    imageUrl: 'img/landing/train.svg',
    description: (
      <>
        <ul>
          <li>
            <h4>Training pipelines</h4>
            Automatic infrastructure management and reproducibility
          </li>
          <li>
            <h4>Hyperparameter tuning</h4>
            Hyperparameter tuning with support for multiple algorithms and GPUs
          </li>
          <li>
            <h4>Built-in visualization tools</h4>
            Training and tuning visualizations with TensorBoard, NNI Web UI and more
          </li>
        </ul>
      </>
    ),
  },
  {
    title: <>Deploy and Manage</>,
    imageUrl: 'img/landing/deploy.svg',
    description: (
      <>
        <ul>
          <li>
            <h4>Workflow orchestration</h4>
            Orchestrate and schedule distributed and parallel workflows
          </li>
          <li>
            <h4>Serverless Inference APIs</h4>
            Serve models with gRPC or REST endpoints that scale on demand
          </li>
          <li>
            <h4>Python SDK and APIs</h4>
            Programmatically perform any action using Python SDK or APIs
          </li>
        </ul>
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--3', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className="text--center">{title}</h3>
      <p className="features__list">{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title="Onepanel"
      description="Open source, end-to-end computer vision platform with modules for model building, labeling, training, hyperparameter tuning, workflow orchestration and model serving">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__name">
            Onepanel <div>CE</div>
          </h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--primary',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/getting-started/quickstart')}>
              GET STARTED WITH ONEPANEL
            </Link>
          </div>
          <div className="hero__platforms">
            Runs on <img src="img/landing/platforms.svg" alt="aws, azure, gcp, kubernetes"></img>
          </div>
          <div className="hero__video">
            <video controls autoPlay muted playsInline width="100%">
              <source type="video/mp4" src="img/landing/onepanel.mp4" /> 
            </video>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={classnames('features', styles.features)}>
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
