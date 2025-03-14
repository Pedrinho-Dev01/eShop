# How to build and run eShop
Press play on visual studio

# Running Grafana and Prometheus
Navigate to: eShop/observability \
Run: docker-compose up -d

### Local Connections
Prometheus: http://localhost:9090 \
Grafana: http://localhost:3001 \
Jaeger:  http://localhost:16686

# Setting Up Grafana
0. Go to: http://localhost:3001
#
1. Go to Connections -> Data Sources -> Add new datasource -> Prometheus
2. Connection: http://prometheus:9090
3. Scroll down -> Save and test
#
4. Go to Connections -> Data Sources -> Add new datasource -> Jaeger
5. Connection: http://jaeger:16686
6. Scroll down -> Save and test
#
7. Go to dashboards
8. New -> Import 
9. Use file present in observability/deliverables named "grafana_dashboard"
10. Edit dashboard -> Reselect prometheus connection
11. Refresh dashboard