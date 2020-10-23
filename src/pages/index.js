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
    imageUrl: 'img/landing/ann.png',
    description: (
      <>
        Annotate images and video using <a href="https://github.com/opencv/cvat" target="_blank">CVAT</a>, with object tracking and semi-automatic annotation of bounding boxes and polygon masks.
      </>
    ),
  },
  // {
  //   title: <>Deploy complete aerial imaging pipelines with photogrammetry tools</>,
  //   imageUrl: 'img/landing/odm.png',
  //   description: (
  //     <>
  //       Leverage tools like <a href="https://github.com/OpenDroneMap/WebODM" target="_blank">WebODM</a> with GPUs to accelerate image processing and to perform pre-annotation for object detection.
  //     </>
  //   ),
  // },
  {
    title: <>Build your models with GPU optimized frameworks and IDEs</>,
    imageUrl: 'img/landing/env.png',
    description: (
      <>
        Seamlessly switch environments between CPU and GPU machines, preloaded with PyTorch, TensorFlow, JupyterLab, VSCode and <a href="https://github.com/onepanelio/templates/tree/master/workspaces" target="_blank">more</a>. 
      </>
    ),
  },
  {
    title: <>Create pipelines as code for model training and data processing</>,
    imageUrl: 'img/landing/pip.png',
    description: (
      <>
        Build reproducible training and data processing pipelines that can perform parallel or distributed tasks on multiple machines.
      </>
    ),
  },
  {
    title: <>Track experiments and visualize model metrics</>,
    imageUrl: 'img/landing/met.png',
    description: (
      <>
        Track and visualize model metrics and experiments with <a href="https://github.com/tensorflow/tensorboard" target="_blank">TensorBoard</a> or bring your own experiment tracking tools.
      </>
    ),
  },
  // {
  //   title: <>Web-based VNC environments that you can access with your browser</>,
  //   imageUrl: 'img/landing/vnc.png',
  //   description: (
  //     <>
  //       Access and share tools like AirSim, Carla, Gazebo or OpenAI Gym through your browser with VNC enabled workspaces. 
  //     </>
  //   ),
  // },
  {
    title: <>Bring your own tools as reproducible templates</>,
    imageUrl: 'img/landing/mod.png',
    description: (
      <>
        Easily bring your own specialized cloud-native tools for development, annotation, pipelines and more.
      </>
    ),
  },
  {
    title: <>Integrate with existing systems using APIs and SDKs</>,
    imageUrl: 'img/landing/sdk.png',
    description: (
      <>
        Extend Onepanel with our powerful REST APIs and SDKs to further automate your pipelines and environments.
      </>
    ),
  },
  // {
  //   title: <>Infrastructure and workflows as code</>,
  //   imageUrl: 'img/landing/iac.png',
  //   description: (
  //     <>
  //       Workflows, environments and infrastructure are all defined as code and version controlled, making them reproducible and portable.
  //     </>
  //   ),
  // },
  // {
  //   title: <>Powered by Kubernetes so you can deploy anywhere</>,
  //   imageUrl: 'img/landing/k8s.png',
  //   description: (
  //     <>
  //       Powered by Kubernetes so you can deploy anywhere Kubernetes can run.
  //     </>
  //   ),
  // }
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
      description="Production scale vision AI platform, with fully integrated components for model building, automated labeling, data processing and model training pipelines.">
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
