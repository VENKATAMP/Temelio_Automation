# Temelio_Automation
Execution Commands
//For all tests
npx cross-env test_env=test playwright test
//For specific tag
UI :     npx cross-env test_env=test playwright test --grep "@UI"