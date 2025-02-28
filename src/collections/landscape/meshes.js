
export const meshes = [
  {
    name: "A10 Secure Service Mesh",
    desc: "A10’s Secure Service Mesh - is a solution that utilizes a hub-spoke model to provide scalable east-west network security and automatic service discovery.",
    link: "https://www.a10networks.com/products/secure-service-mesh/",
    autoinject: "No",
    tcp_web: "Yes",
    grpc: "Yes",
    h2: "Yes",
    multi_cluster: "Yes",
    multi_tenant: "Yes",
    prometheus: "No, Replaced by Harmony Controller",
    tracing: "Yes",
    encryption: "Yes",
    multi_tenant_score: 10,
    spiffe: "?",
    spire: "?"
  },
  {
    name: "App Mesh",
    desc: "AWS App Mesh - a managed control plane offering using Envoy as the data plane.",
    link: "https://github.com/aws/aws-app-mesh-examples",
    autoinject: "No",
    tcp_web: "Yes",
    grpc: "Yes",
    h2: "Yes",
    multi_cluster: "Yes",
    multi_tenant: "No",
    prometheus: "No",
    tracing: "Yes",
    encryption: "Yes",
    multi_tenant_score: 6,
    spiffe: "Not supported today, but in development",
    spire: "Not supported today, but in development"
  },
  {
    name: "Alibaba Cloud Service Mesh (ASM)",
    desc: "Alibaba Cloud Service Mesh (ASM) - a fully managed control plane offering that is compatible with Istio.",
    link: "https://www.alibabacloud.com/product/servicemesh",
    autoinject: "Yes",
    tcp_web: "Yes",
    grpc: "Yes",
    h2: "Yes",
    multi_cluster: "Yes",
    multi_tenant: "Yes",
    prometheus: "Yes",
    tracing: "Yes",
    encryption: "Yes",
    multi_tenant_score: 10,
    spiffe: "?",
    spire: "?"
  },
  {
    name: "Aspen Mesh",
    desc: "Aspen Mesh - a commercial offering built on top of Istio with some open source components.",
    link: "https://aspenmesh.io/",
    autoinject: "Yes",
    tcp_web: "Yes",
    grpc: "Yes",
    h2: "Yes",
    multi_cluster: "Yes",
    multi_tenant: "Yes",
    prometheus: "Yes",
    tracing: "Jaeger",
    encryption: "Yes",
    multi_tenant_score: 10,
    netdev_persona_score: 6,
    spiffe: "?",
    spire: "?"
  },
  {
    name: "Cilium",
    desc: "Cilium - DaemonSet-based service mesh using Linux BPF.",
    link: "https://cilium.io/",
    autoinject: "?",
    tcp_web: "Yes",
    grpc: "Yes",
    h2: "?",
    multi_cluster: "Yes",
    multi_tenant: "?",
    prometheus: "Yes",
    tracing: "?",
    encryption: "Yes",
    multi_tenant_score: 1,
    netdev_persona_score: 4,
    spiffe: "?",
    spire: "?"
  },
  {
    name: "Citrix Service Mesh",
    desc: "Service mesh based on Istio and served with Citrix ADC CPX sidecar proxies.",
    link: "https://github.com/citrix/citrix-istio-adaptor",
    autoinject: "Yes",
    tcp_web: "Yes",
    grpc: "Yes",
    h2: "Yes",
    multi_cluster: "?",
    multi_tenant: "?",
    prometheus: "Yes",
    tracing: "?",
    encryption: "Yes",
    multi_tenant_score: 1,
    netdev_persona_score: 9,
    spiffe: "Partial",
    spire: "No"
  },
  {
    name: "Consul",
    desc: "Consul - Connect is a feature that enables encrpyted communication between services.",
    link: "https://www.consul.io/mesh.html",
    autoinject: "Yes",
    tcp_web: "Yes",
    grpc: "Yes",
    h2: "Yes",
    multi_cluster: "Yes",
    multi_tenant: "No",
    prometheus: "Yes",
    tracing: "Pluggable",
    encryption: "Yes",
    multi_tenant_score: 1,
    netdev_persona_score: 9,
    smi: "",
    tac: "Yes",
    taclink: "https://github.com/hashicorp/consul-smi-controller",
    tmetrics: "No",
    tmetricslink: "",
    tsplit: "No",
    tsplitlink: "",
    tspec: "No",
    tspeclink: "",
    spiffe: "Partial",
    spire: "No"
  },
  {
    name: "Istio",
    link: "https://istio.io",
    autoinject: "Yes",
    tcp_web: "Yes",
    grpc: "Yes",
    h2: "Yes",
    multi_cluster: "Yes",
    multi_tenant: "Yes",
    desc: "An open platform to connect, monitor, and secure microservices. Created by Google and IBM; now with maintainers from 14 companies and implementations from over 15 vendors.",
    prometheus: "Yes",
    tracing: "OpenTracing, Zipkin, Jaeger, Lightstep",
    encryption: "Yes",
    multi_tenant_score: 5,
    netdev_persona_score: 1,
    smi: "",
    tac: "Yes",
    taclink: "https://github.com/deislabs/smi-adapter-istio",
    tmetrics: "Yes",
    tmetricslink: "https://github.com/deislabs/smi-metrics/tree/master/pkg/istio",
    tsplit: "Yes",
    tsplitlink: "https://github.com/deislabs/smi-adapter-istio",
    tspec: "Yes",
    tspeclink: "https://github.com/deislabs/smi-adapter-istio",
    spiffe: "Istio has partial SPIFFE support, but doesn't support the Workload API or Federation API currently, and thus is not interoperable with other SPIFFE implementations.",
    spire: "Istio does not use SPIRE by default"
  },
  {
    name: "Kuma",
    desc: "Kuma is a universal open source control-plane that can run and be operated natively across both Kubernetes and VM environments.",
    link: "https://kuma.io",
    autoinject: "Yes",
    tcp_web: "Yes",
    grpc: "Yes",
    h2: "Yes",
    multi_cluster: "Yes",
    multi_tenant: "Yes",
    prometheus: "Yes",
    tracing: "Yes",
    encryption: "Yes",
    multi_tenant_score: 8,
    netdev_persona_score: 2,
    spiffe: "Yes",
    spire: "No"
  },
  {
    name: "Linkerd 1.x",
    desc: "Linkerd - hosted by the CNCF and built on top of Twitter Finagle. Linkerd includes both a proxying data plane and the Namerd (“namer-dee”) control plane all in one package. ",
    link: "https://linkerd.io",
    autoinject: "No",
    tcp_web: "Yes",
    grpc: "?",
    h2: "Yes",
    multi_cluster: "?",
    multi_tenant: "?",
    prometheus: "Yes",
    tracing: "Zipkin",
    encryption: "Yes",
    multi_tenant_score: 1,
    netdev_persona_score: 5,
    spiffe: "SPIFFE IDs are not supported in Linkerd",
    spire: "No"
  },
  {
    name: "Linkerd 2.x(Conduit)",
    desc: "Conduit - A Kubernetes-native (only) service mesh announced as a project in December 2017. In contrast to Istio and in learning from Linkerd, Conduit’s design principles revolve around a minimalist architecture and zero config philosophy, optimizing for streamlined setu. Open Source. From Buoyant. Written in Rust and Go.",
    link: "https://linkerd.io",
    autoinject: "Yes",
    h2: "Yes",
    grpc: "Yes",
    tcp_web: "Yes",
    multi_cluster: "Yes",
    multi_tenant: "Yes",
    prometheus: "Yes",
    tracing: "Pluggable",
    encryption: "Yes",
    multi_tenant_score: 1,
    netdev_persona_score: 5,
    smi: "",
    tac: "No",
    taclink: "",
    tmetrics: "Yes",
    tmetricslink: "https://github.com/deislabs/smi-metrics/tree/master/pkg/linkerd",
    tsplit: "Yes",
    tsplitlink: "https://linkerd.io/2/features/traffic-split/",
    tspec: "No",
    tspeclink: "",
    spiffe: "No",
    spire: "No"
  },
  {
    name: "NGINX Service Mesh",
    desc: "NGINX Service Mesh (NSM) is a data plane-focused serviced mesh. NSM was built from the ground-up to support a unified data plane with NGINX Plus reverse proxy sidecars and NGINX Plus Ingress Controller for Kubernetes providing integrated E/W and N/S traffic management and security.",
    link: "https://www.nginx.com/products/nginx-service-mesh/",
    autoinject: "Yes",
    tcp_web: "Yes",
    grpc: "Yes",
    h2: "No",
    multi_cluster: "No",
    multi_tenant: "No",
    prometheus: "Yes",
    tracing: "Jaeger, Zipkin",
    encryption: "Yes",
    multi_tenant_score: "?",
    netdev_persona_score: "?",
    smi: "",
    tac: "Yes",
    taclink: "https://docs.nginx.com/nginx-service-mesh/tutorials/accesscontrol-walkthrough/",
    tmetrics: "Yes",
    tmetricslink: "https://docs.nginx.com/nginx-service-mesh/usage/traffic-metrics/",
    tsplit: "Yes",
    tsplitlink: "https://docs.nginx.com/nginx-service-mesh/tutorials/trafficsplit-deployments/",
    tspec: "Yes",
    tspeclink: "https://docs.nginx.com/nginx-service-mesh/usage/traffic-policies/",
    spiffe: "Yes",
    spire: "Yes"
  },
  {
    name: "Traefik Mesh",
    desc: "Traefik Mesh is a simple, yet full-featured service mesh. It is container-native and fits as your de-facto service mesh in your Kubernetes cluster.",
    link: "https://github.com/traefik/mesh",
    autoinject: "No",
    h2: "Yes",
    grpc: "Yes",
    tcp_web: "Yes",
    multi_cluster: "No",
    multi_tenant: "No",
    prometheus: "Yes",
    tracing: "Yes",
    encryption: "No",
    multi_tenant_score: 1,
    netdev_persona_score: 3,
    smi: "",
    tac: "Yes",
    taclink: "https://github.com/traefik/mesh",
    tmetrics: "No",
    tmetricslink: "",
    tsplit: "Yes",
    tsplitlink: "https://github.com/traefik/mesh",
    tspec: "Yes",
    tspeclink: "https://github.com/traefik/mesh",
    spiffe: "No",
    spire: "No"
  },
  {
    name: "Tencent Cloud Mesh (TCM)",
    desc: "a fully managed control plane integrates with Tencent Cloud infrastructure which is fully compatible with Istio.",
    link: "https://cloud.tencent.com/product/tcm",
    autoinject: "Yes",
    tcp_web: "Yes",
    grpc: "Yes",
    h2: "Yes",
    multi_cluster: "Yes",
    multi_tenant: "Yes",
    prometheus: "Yes",
    tracing: "Yes",
    encryption: "Yes",
    multi_tenant_score: 10,
    spiffe: "?",
    spire: "?"
  },
  {
    name: "Maistra",
    desc: "Maistra is a security focused distribution of Istio designed to run on top of OpenShift.",
    link: "https://www.maistra.io",
    autoinject: "Yes",
    h2: "Yes",
    grpc: "Yes",
    tcp_web: "Yes",
    multi_cluster: "No",
    multi_tenant: "Yes",
    prometheus: "Yes",
    tracing: "Jaeger/Grafana",
    encryption: "Yes",
    multi_tenant_score: 10,
    spiffe: "Partial",
    spire: "No"
  },
  {
    name: "Mesher",
    desc: "Mesher is service mesh implementation based on go-chassis which can work together with ServiceComb Service center running on any infrastructure. Mesher can work with go-chassis in same service mesh control plane and it supports both linux and windows OS",
    link: "https://github.com/go-mesh/mesher",
    autoinject: "Yes",
    h2: "Yes",
    grpc: "Yes",
    tcp_web: "No",
    multi_cluster: "Yes, powered by ServiceComb",
    multi_tenant: "Huawei Cloud only",
    prometheus: "?",
    tracing: "?",
    encryption: "?",
    multi_tenant_score: 8,
    spiffe: "No",
    spire: "No"
  },
  {
    name: "SOFAMesh",
    desc: "A solution for large-scale Service Mesh based on Istio.",
    link: "https://github.com/alipay/sofa-mesh",
    autoinject: "Project shutdown",
    tmp_link: "https://github.com/sofastack/sofa-mesh/blob/master/README.md",
    tcp_web: "Project Shutdown",
    multi_cluster: "Project Shutdown",
    multi_tenant: "Project Shutdown",
    prometheus: "Project Shutdown",
    tracing: "Project Shutdown",
    encryption: "Project Shutdown",
    multi_tenant_score: 8,
    netdev_persona_score: 7,
    spiffe: "Partial",
    spire: "No"
  },
  {
    name: "Octarine",
    desc: "Octarine is a security platform for k8s workloads that combines admission control with runtime network security leveraging an Envoy-based service mesh",
    link: "https://www.octarinesec.com/",
    autoinject: "Project shutdown",
    h2: "Yes",
    grpc: "Yes",
    tcp_web: "Yes",
    multi_cluster: "Yes",
    multi_tenant: "Yes",
    prometheus: "No",
    tracing: "No",
    encryption: "Yes",
    multi_tenant_score: 10,
    netdev_persona_score: 8,
    spiffe: "No",
    spire: "No"
  },
  {
    name: "Open Service Mesh",
    desc: "Open Service Mesh (OSM) is a lightweight and extensible cloud native service mesh.",
    link: "https://openservicemesh.io/",
    autoinject: "Yes",
    h2: "Yes",
    grpc: "Yes",
    tcp_web: "Yes",
    multi_cluster: "No",
    multi_tenant: "No",
    prometheus: "Yes",
    tracing: "pluggable",
    encryption: "Yes",
    multi_tenant_score: 1,
    netdev_persona_score: 5,
    smi: "",
    tac: "Yes",
    taclink: "https://github.com/openservicemesh/osm#smi-specification-support",
    tmetrics: "Yes",
    tmetricslink: "https://github.com/openservicemesh/osm#smi-specification-support",
    tsplit: "Yes",
    tsplitlink: "https://github.com/openservicemesh/osm#smi-specification-support",
    tspec: "Yes",
    tspeclink: "https://github.com/openservicemesh/osm#smi-specification-support",
    spiffe: "No",
    spire: "No"
  },
  {
    name: "Rotor",
    link: "https://github.com/turbinelabs/",
    autoinject: "Project shutdown",
    tmp_link: "https://blog.turbinelabs.io/turbine-labs-is-shutting-down-and-our-team-is-joining-slack-2ad41554920c",
    tcp_web: "Project shutdown",
    grpc: "Project shutdown",
    h2: "Project shutdown",
    multi_cluster: "Project shutdown",
    multi_tenant: "Project shutdown",
    desc: "Rotor - a fast, lightweight bridge between your service discovery and Envoy’s configuration APIs. Turbine Labs has shutdown.",
    prometheus: "Project shutdown",
    tracing: "Project shutdown",
    encryption: "Project shutdown",
    spiffe: "No",
    spire: "No"
  },
  {
    name: "Yggdrasil",
    desc: "Yggdrasil is an Envoy control plane that configures listeners and clusters based off Kubernetes ingresses from multiple Kube Clusters.",
    link: "https://github.com/uswitch/yggdrasil",
    autoinject: "N/A",
    tcp_web: "?",
    grpc: "Yes",
    h2: "Yes",
    multi_cluster: "Yes",
    multi_tenant: "?",
    prometheus: "Yes",
    tracing: "Pluggable",
    encryption: "Yes",
    multi_tenant_score: 1,
    spiffe: "No",
    spire: "No"
  },
  {
    name: "Zuul",
    desc: "Zuul is a gateway service that provides dynamic routing, monitoring, resiliency, security, and more.",
    link: "https://github.com/Netflix/zuul",
    autoinject: "No",
    h2: "?",
    grpc: "?",
    tcp_web: "?",
    multi_cluster: "?",
    multi_tenant: "No",
    prometheus: "?",
    tracing: "?",
    encryption: "?",
    multi_tenant_score: 1,
    spiffe: "No",
    spire: "No"
  },
  {
    name: "Vulcand",
    desc: "Programmatic load balancer and service mesh backed by etcd",
    link: "https://github.com/vulcand/vulcand",
    autoinject: "No",
    tcp_web: "No",
    grpc: "?",
    h2: "Yes",
    multi_cluster: "?",
    multi_tenant: "?",
    prometheus: "No",
    tracing: "No",
    encryption: "Yes",
    multi_tenant_score: 1,
    spiffe: "No",
    spire: "No"
  },
  {
    name: "Network Service Mesh",
    desc: "Network Service Mesh (NSM) is a novel approach solving complicated L2/L3 use cases in Kubernetes that are tricky to address with the existing Kubernetes Network Mode",
    link: "https://github.com/networkservicemesh/networkservicemesh",
    autoinject: "?",
    tcp_web: "?",
    grpc: "?",
    h2: "?",
    multi_cluster: "?",
    multi_tenant: "?",
    prometheus: "?",
    tracing: "?",
    encryption: "?",
    multi_tenant_score: 1,
    spiffe: "Yes",
    spire: "Yes"
  }
];
