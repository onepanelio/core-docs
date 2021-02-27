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
            Annotate images and videos with automatic annotation for semantic segmentation and object detection  
          </li>
          <li>
            <h4>Data augmentation and processing</h4>
            Augment and pre-process your data using Albumentations, imgaug or bring-your-own library  
          </li>
          <li>
            <h4>Bring your own tools</h4>
            Bring your own data preparation and annotation tools and integrate them into your pipelines
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
            <h4>Elastic JupyterLab Workspaces</h4>
            JupyterLab with TensorBoard, Git, debugging, diffing, Conda, OpenCV, TensorFlow, PyTorch and GPU support  
          </li>
          <li>
            <h4>Elastic VS Code Workspaces</h4>
            VSCode environments with the same libraries and tools that are consistent with your other environments  
          </li>
          <li>
            <h4>Bring your own IDE or VNC tools</h4>
            Bring your own IDEs or VNC tools using a robust YAML and Docker based templating engine
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
            Train models with built-in algorithms for object detection and semantic segmentation
          </li>
          <li>
            <h4>Hyperparameter tuning</h4>
            Fully integrated with NNI for hyperparameter tuning for object detection and semantic segmentation
          </li>
          <li>
            <h4>Visualization tools</h4>
            Training and tuning visualizations with TensorBoard and NNI Web UI
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
            Automate, orchestrate and schedule distributed and parallel workflows across multiple machines 
          </li>
          <li>
            <h4>Inference and model ensembles</h4>
            Use your trained models to run inference Workflows or ensemble multiple models in the same Workflow
          </li>
          <li>
            <h4>Python SDK</h4>
            Programmatically perform any task that is available through the web UI
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
      description="The open source vision AI platform with fully integrated modules for model building, automated labeling, data processing, model training and hyperparameter tuning.">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__name">Onepanel</h1>
          {/* <h2 className="hero__title">{siteConfig.title}</h2> */}
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--primary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/getting-started/quickstart')}>
              DEPLOY ONEPANEL
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
          <div className="hero__video">
            {/* <iframe width="800" height="450" src="https://www.youtube.com/embed/iu6uBdBUV60?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            <video autoPlay loop muted playsInline width="100%">
              <source type="video/mp4" src="img/landing/onepanel.mp4" /> 
            </video>
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
