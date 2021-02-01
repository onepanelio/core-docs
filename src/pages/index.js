import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    videoUrl_right: 'img/landing/automatic_annotation.mp4',
    title: 'Image and video annotation with automatic annotation',
    description: (
      <>
        Iteratively annotate, train and automatically annotate with bounding boxes and polygon masks.
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
    videoUrl: 'img/landing/hyperparam_tuning.mp4',
    title_right: 'Hyperparameter tuning with NNI',
    description_right: (
      <>
        Easily add hyperparameter tuning to any training pipeline, saving the best metrics, parameters and model.
      </>
    ),
  },
  {
    videoUrl_right: 'img/landing/jupyterlabs.mp4',
    title: 'JupyterLab with TensorFlow, PyTorch and GPU support',
    description: (
      <>
        JupyterLab with TensorBoard, Git, debugging, diffing, Conda, OpenCV, TensorFlow, PyTorch and GPU support.
      </>
    ),
  },
  {
    videoUrl: 'img/landing/training_pipeline.mp4',
    title_right: 'Auto scaling, distributed and parallel data processing and training pipelines',
    description_right: (
      <>
        Build reproducible, distributed and parallel data and training pipelines with realtime logs and output snapshots.
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
    videoUrl_right: 'img/landing/tools.mp4',
    title: 'Version controlled pipelines and environments as code',
    description: (
      <>
        Bring your own IDEs, tools and pipelines with a version controlled YAML and Docker based template engine.
      </>
    ),
  },
  {
    videoUrl: 'img/landing/metric_tools.mp4',
    title_right: 'Deploy with custom visualization tools',
    description_right: (
      <>
        Track and visualize metrics and experiments with TensorBoard, NNI UI or bring your own tool.
      </>
    ),
  },
  {
    videoUrl_right: 'img/landing/python_sdk.mp4',
    title: "Onepanel's Python SDK",
    description: (
      <>
        Programmatically execute and define your pipelines with a powerful <a href='https://github.com/onepanelio/python-sdk' target="_blank">Python SDK</a>.
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

function Feature({imageUrl, videoUrl, videoUrl_right, title, title_right, description, description_right}) {
  const imgUrl = useBaseUrl(imageUrl);
  const vidUrl = useBaseUrl(videoUrl);
  const vidUrl_right = useBaseUrl(videoUrl_right);
  return (
    <div className={classnames('col col--12', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}

      {vidUrl_right && (
        <div className="right_side_pic">
          <video autoPlay loop muted playsInline width="100%">
            <source type="video/mp4" src={vidUrl_right} />
          </video>
        </div>
      )}

      {videoUrl && (
        <div className="left_side_pic">
          <video autoPlay loop muted playsInline width="100%">
            <source type="video/mp4" src={videoUrl} />
          </video>
        </div>
        )}

        <div class="left_side_content w-clearfix">
          <h3 className="h3_left_aligned">{title}</h3>
          <p className="p_fl">{description}</p>
        </div>
        <div class="right_side_content w-clearfix">
          <h3 className="h3_left_aligned">{title_right}</h3>
          <p className="p_fl">{description_right}</p>
        </div>
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
