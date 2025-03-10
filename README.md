# How to build and run eShop
Press play on visual studio

# Running Grafana and Prometheus
Navigate to: eShop/observability
Run: docker-compose up -d

### Local Connections
Prometheus: http://localhost:9090
Grafana:    http://localhost:3001

# Setting Up Grafana
1. Go to Connections -> Data Sources -> Add new datasource -> Prometheus
2. Connection: http://prometheus:9090
3. Scroll down -> Save and test

4. Go to dashboards
5. New -> Import 
6. Use file present in observability/deliverables named "grafana_dashboard"
7. Edit dashboard -> Reselect prometheus connection
8. Refresh dashboard

# Missing Deliverables
Load Simulation